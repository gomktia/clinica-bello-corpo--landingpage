import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, Shield, CreditCard, Lock, ArrowLeft } from "lucide-react";
import logoFull from "@/assets/logo-full.png";

interface PreRegistrationData {
  name: string;
  email: string;
  whatsapp: string;
  specialty: string;
}

const Checkout = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<PreRegistrationData | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [cardData, setCardData] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  });

  useEffect(() => {
    const storedData = localStorage.getItem("preRegistration");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Redirect to thank you page
    navigate("/obrigado");
  };

  const courseDetails = [
    "Acesso completo ao curso Bello Corpo™",
    "Módulo bônus: Mentoria de Negócios",
    "Certificado Premium de Conclusão",
    "Acesso vitalício à comunidade exclusiva",
    "Suporte direto com a mentora",
    "Material de apoio e protocolos",
  ];

  return (
    <main className="min-h-screen bg-gradient-hero py-12">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header with logo */}
        <div className="flex items-center justify-between mb-8">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar</span>
          </motion.button>
          
          <img
            src={logoFull}
            alt="Bello Corpo"
            className="h-8 object-contain"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border/50">
              <h2 className="font-display text-2xl mb-6">Resumo do Pedido</h2>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-start pb-4 border-b border-border/50">
                  <div>
                    <h3 className="font-display text-lg">Formação Bello Corpo™</h3>
                    <p className="text-sm text-muted-foreground">
                      Estética Avançada Facial e Corporal
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground line-through">
                      R$ 2.997,00
                    </p>
                    <p className="font-display text-2xl text-primary">
                      R$ 1.497,00
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {courseDetails.map((detail, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-border/50">
                <span className="font-display text-lg">Total:</span>
                <div className="text-right">
                  <p className="font-display text-3xl text-primary">R$ 1.497,00</p>
                  <p className="text-sm text-muted-foreground">
                    ou 12x de R$ 147,90
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <div className="flex items-center gap-2 text-primary">
                  <Shield className="w-5 h-5" />
                  <span className="font-semibold">Garantia de 7 dias</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Se não ficar satisfeita, devolvemos 100% do seu investimento.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Payment Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border/50">
              <div className="flex items-center gap-2 mb-6">
                <CreditCard className="w-6 h-6 text-primary" />
                <h2 className="font-display text-2xl">Pagamento</h2>
              </div>

              {userData && (
                <div className="mb-6 p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">Olá,</p>
                  <p className="font-semibold">{userData.name}</p>
                  <p className="text-sm text-muted-foreground">{userData.email}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Número do Cartão</Label>
                  <Input
                    id="cardNumber"
                    placeholder="0000 0000 0000 0000"
                    value={cardData.number}
                    onChange={(e) =>
                      setCardData({ ...cardData, number: e.target.value })
                    }
                    required
                    className="h-12 bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cardName">Nome no Cartão</Label>
                  <Input
                    id="cardName"
                    placeholder="Como está impresso no cartão"
                    value={cardData.name}
                    onChange={(e) =>
                      setCardData({ ...cardData, name: e.target.value })
                    }
                    required
                    className="h-12 bg-background"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Validade</Label>
                    <Input
                      id="expiry"
                      placeholder="MM/AA"
                      value={cardData.expiry}
                      onChange={(e) =>
                        setCardData({ ...cardData, expiry: e.target.value })
                      }
                      required
                      className="h-12 bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      placeholder="123"
                      value={cardData.cvv}
                      onChange={(e) =>
                        setCardData({ ...cardData, cvv: e.target.value })
                      }
                      required
                      className="h-12 bg-background"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full"
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <span className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                      />
                      Processando...
                    </span>
                  ) : (
                    <>
                      <Lock className="w-5 h-5 mr-2" />
                      Finalizar Compra - R$ 1.497,00
                    </>
                  )}
                </Button>

                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Lock className="w-4 h-4" />
                  <span>Pagamento 100% seguro</span>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
