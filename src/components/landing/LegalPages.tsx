import React from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface LegalModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
    children: React.ReactNode;
}

const LegalModal = ({ isOpen, onOpenChange, title, children }: LegalModalProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="w-[95%] max-w-2xl bg-white border-secondary/10 p-0 overflow-hidden rounded-[2rem]">
                <DialogHeader className="p-8 border-b border-secondary/5 bg-secondary/5">
                    <DialogTitle className="text-2xl font-display font-black text-secondary">
                        {title}
                    </DialogTitle>
                    <DialogDescription className="text-secondary/50 font-medium">
                        Última atualização: Janeiro de 2024
                    </DialogDescription>
                </DialogHeader>
                <ScrollArea className="max-h-[70vh] p-8">
                    <div className="prose prose-secondary max-w-none text-secondary/70 prose-headings:font-display prose-headings:font-black prose-headings:text-secondary prose-p:leading-relaxed">
                        {children}
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
};

export const PrivacyPolicy = ({
    isOpen,
    onOpenChange,
}: {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}) => (
    <LegalModal isOpen={isOpen} onOpenChange={onOpenChange} title="Política de Privacidade">
        <h3>1. Introdução</h3>
        <p>A Clínica Bello Corpo valoriza a privacidade dos seus usuários. Esta política descreve como coletamos e usamos seus dados em conformidade com a LGPD.</p>

        <h3>2. Coleta de Dados</h3>
        <p>Coletamos dados fornecidos voluntariamente através de nossos formulários de cadastro, como nome, e-mail e telefone, para envio de informações sobre nossos cursos e promoções.</p>

        <h3>3. Uso de Mensagens (WhatsApp)</h3>
        <p>Ao se inscrever, você autoriza o contato via WhatsApp para fins de suporte, avisos de aulas e ofertas exclusivas do curso.</p>

        <h3>4. Cookies</h3>
        <p>Utilizamos cookies para personalizar sua experiência e analisar o tráfego do site.</p>

        <h3>5. Seus Direitos</h3>
        <p>Você pode solicitar a exclusão de seus dados a qualquer momento enviando um e-mail para nosso suporte.</p>
    </LegalModal>
);

export const TermsOfUse = ({
    isOpen,
    onOpenChange,
}: {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}) => (
    <LegalModal isOpen={isOpen} onOpenChange={onOpenChange} title="Termos de Uso">
        <h3>1. Aceitação dos Termos</h3>
        <p>Ao acessar este site, você concorda em cumprir estes termos de serviço e todas as leis e regulamentos aplicáveis.</p>

        <h3>2. Licença de Uso</h3>
        <p>O conteúdo deste site é de propriedade exclusiva da Clínica Bello Corpo. É proibida a reprodução sem autorização prévia.</p>

        <h3>3. Responsabilidade</h3>
        <p>Os resultados apresentados nos depoimentos são individuais e podem variar de pessoa para pessoa. Dedicação e aplicação prática do conteúdo são essenciais.</p>

        <h3>4. Pagamentos e Reembolsos</h3>
        <p>Garantimos o direito de arrependimento em até 7 dias após a compra, conforme o Código de Defesa do Consumidor.</p>
    </LegalModal>
);
