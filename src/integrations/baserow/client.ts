export interface LeadData {
    name: string;
    email: string;
    whatsapp: string;
    specialty: string;
    companyName: string;
}

export const createLeadInBaserow = async (data: LeadData) => {
    const tableId = import.meta.env.VITE_BASEROW_TABLE_ID;
    const token = import.meta.env.VITE_BASEROW_TOKEN;

    if (!tableId || !token) {
        console.error("Baserow credentials missing");
        throw new Error("Configuração do Baserow ausente. Verifique o arquivo .env");
    }

    // Map frontend fields to Baserow Column Names
    // IMPORANTE: Crie as colunas no Baserow EXATAMENTE com esses nomes (Case Sensitive)
    const payload = {
        "Name": data.name,
        "Empresa": data.companyName,
        "Email": data.email,
        "Phone number": data.whatsapp,
        "Especialidade": data.specialty
    };

    const response = await fetch(`https://api.baserow.io/api/database/rows/table/${tableId}/?user_field_names=true`, {
        method: "POST",
        headers: {
            "Authorization": `Token ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        const errorData = await response.json();
        console.error("Baserow Error:", errorData);
        throw new Error(`Erro ao salvar no Baserow: ${response.statusText}`);
    }

    return response.json();
};
