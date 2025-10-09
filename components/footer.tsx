import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/50 bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="container px-4 py-4 flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left max-w-6xl">
              {/* Brand */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-card-foreground">Questly</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  "Transformando rutinas en aventuras desde el día uno."
                </p>
              </div>

              {/* Product */}
              <div className="space-y-4">
                <h4 className="font-semibold text-card-foreground">Enlaces Rápidos</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Inicio</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">¿Cómo Funciona?</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Descargar</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Política de Privacidad</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Términos de Servicio</a></li>
                </ul>
              </div>

              {/* Support */}
              <div className="space-y-4">
                <h4 className="font-semibold text-card-foreground">El Futuro (Visión)</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Modo Social</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Integración con Wearables</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Packs de Misiones Temáticos</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-border/50 mt-12 pt-8 flex flex-col items-center justify-center text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Questly. Todos los derechos reservados. ¡Play your Life!
            </p>          
          </div>
      </div>
    </footer>
  )
}
