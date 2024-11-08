import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Wrench, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, ChevronDown } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { useState } from "react"

export default function Component() {
  const [isOpen, setIsOpen] = useState(false)
  const [openBrands, setOpenBrands] = useState({})

  const toggleBrand = (brand) => {
    setOpenBrands(prev => ({ ...prev, [brand]: !prev[brand] }))
  }

  const vehicleBrands = {
    american: [
      { name: "Ford", models: ["Mustang", "F-150", "Explorer", "Escape"] },
      { name: "Chevrolet", models: ["Camaro", "Silverado", "Tahoe", "Equinox"] },
      { name: "Dodge", models: ["Challenger", "Charger", "Durango", "Ram"] },
    ],
    european: [
      { name: "Mercedes-Benz", models: ["Clase A", "Clase C", "Clase E", "GLC"] },
      { name: "BMW", models: ["Serie 3", "Serie 5", "X3", "X5"] },
      { name: "Audi", models: ["A3", "A4", "Q5", "Q7"] },
    ]
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0348-BjMYlKXPBQr2kYI57egK3I33lfNkwW.jpeg"
            alt="Eurostar Taller Mecánico Logo"
            width={100}
            height={40}
            className="mr-2"
          />
          <span className="text-lg font-bold"></span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#inicio">
            Inicio
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#servicios">
            Servicios
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#galeria">
            Galería
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#contacto">
            Contacto
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section id="inicio" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Taller Mecánico Eurostar
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Servicio de calidad y confianza para tu vehículo. Más de 8 años de experiencia nos respaldan.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="servicios" className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">Nuestros Servicios</h2>
            <Collapsible
              open={isOpen}
              onOpenChange={setIsOpen}
              className="w-full space-y-2"
            >
              <CollapsibleTrigger asChild>
                <Button variant="outline" size="lg" className="w-full justify-between text-black">
                  Ver lista de servicios
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-2">
                <Card className="bg-gray-800 text-white">
                  <CardHeader>
                    <CardTitle>Servicios de Mantenimiento</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Cambio de aceite y filtros</li>
                      <li>Afinación de motor</li>
                      <li>Revisión y cambio de frenos</li>
                      <li>Alineación y balanceo</li>
                      <li>Revisión de suspensión</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-gray-800 text-white">
                  <CardHeader>
                    <CardTitle>Reparaciones Mecánicas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Reparación de motor</li>
                      <li>Reparación de transmisión</li>
                      <li>Reparación de sistema de escape</li>
                      <li>Reparación de sistema de dirección</li>
                      <li>Reparación de sistema de refrigeración</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-gray-800 text-white">
                  <CardHeader>
                    <CardTitle>Servicios Eléctricos y Electrónicos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Diagnóstico computarizado</li>
                      <li>Reparación de sistema eléctrico</li>
                      <li>Reparación de alternadores y arranques</li>
                      <li>Instalación de accesorios eléctricos</li>
                      <li>Reparación de sistemas de aire acondicionado</li>
                    </ul>
                  </CardContent>
                </Card>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </section>
        <section id="galeria" className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">Galería</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0410-u9LyGyFAnbiGF9g3jVD9H3142iGHl0.jpeg"
                  alt="Motor de alto rendimiento Mercedes-Benz AMG"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full"
                />
                <p className="text-sm text-gray-300">Acudimos hasta tu domicilio por tu vehículo, nuestra atención personalizada para cada uno de nuestros clientes que forman parte de esta marca en construcción</p>
              </div>
              <div className="space-y-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0403-7voAdOWx1Ul11wiKXmHpVBXuCjDDWY.jpeg"
                  alt="Interior de vehículo de lujo"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full"
                />
                <p className="text-sm text-gray-300">EuroStar consiente tu vehículo con el mismo amor e interés como tú lo harías, la confianza de los clientes habla por nosotros.</p>
              </div>
              <div className="space-y-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0404-4GB6oFL3vDMU1eLBcn0C4g71jzylbQ.jpeg"
                  alt="Dodge Challenger personalizado"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full"
                />
                <p className="text-sm text-gray-300">Los autos de más alta gama de Guatemala son vistos por EuroStar, somos especialistas en resolver tus necesidades.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="contacto" className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">Contacto</h2>
            <div className="flex flex-col items-center justify-center gap-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0348-BjMYlKXPBQr2kYI57egK3I33lfNkwW.jpeg"
                alt="Eurostar Taller Mecánico Logo"
                width={200}
                height={80}
                className="mb-4"
              />
              <p className="text-xl font-bold text-white mb-2">Teléfono: 51803210</p>
              <p className="text-white mb-4">Km 21.5 Carretera A El Salvador</p>
              <div className="bg-gray-900 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">Horario de atención:</h3>
                <p className="text-white">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </section>
        <section id="agendar-cita" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">¿Necesitas una cita?</h2>
            <div className="max-w-[500px] mx-auto">
              <form className="space-y-4">
                <Input type="text" name="name" placeholder="Nombre" required className="text-black" />
                <Input type="email" name="email" placeholder="Correo electrónico" required className="text-black" />
                <Input type="tel" name="phone" placeholder="Teléfono" required className="text-black" />
                <Input type="text" name="vehicle" placeholder="Marca y modelo del vehículo" required className="text-black" />
                <Input type="date" name="date" required className="text-black" />
                <textarea 
                  name="description"
                  className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-700" 
                  placeholder="Describe el servicio que necesitas" 
                  rows={4}
                  required
                ></textarea>
                <Button type="submit" className="w-full">Solicitar cita</Button>
              </form>
              <p className="text-gray-300 text-sm mt-4 text-center">
                Te contactaremos pronto para confirmar tu cita.
              </p>
            </div>
          </div>
        </section>
        <section id="marcas" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">Marcas que atendemos</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">Vehículos Americanos</h3>
                {vehicleBrands.american.map((brand) => (
                  <Collapsible key={brand.name} open={openBrands[brand.name]} onOpenChange={() => toggleBrand(brand.name)}>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" className="w-full justify-between text-white">
                        {brand.name}
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openBrands[brand.name] ? 'transform rotate-180' : ''}`} />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <ul className="pl-6 mt-2 space-y-1 text-gray-300">
                        {brand.models.map((model) => (
                          <li key={model}>{model}</li>
                        ))}
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">Vehículos Europeos</h3>
                {vehicleBrands.european.map((brand) => (
                  <Collapsible key={brand.name} open={openBrands[brand.name]} onOpenChange={() => toggleBrand(brand.name)}>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" className="w-full justify-between text-white">
                        {brand.name}
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openBrands[brand.name] ? 'transform rotate-180' : ''}`} />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <ul className="pl-6 mt-2 space-y-1 text-gray-300">
                        {brand.models.map((model) => (
                          <li key={model}>{model}</li>
                        ))}
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-xs text-gray-400">© 2024 Taller Mecánico Eurostar. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4 text-white" href="#">
            Términos de Servicio
          </a>
          <a className="text-xs hover:underline underline-offset-4 text-white" href="#">
            Privacidad
          </a>
        </nav>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/share/15C1DX4HQ2/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-600">
            <Facebook className="h-5 w-5 text-white" />
            <span className="sr-only">Facebook</span>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-600">
            <Twitter className="h-5 w-5 text-white" />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="https://www.instagram.com/eurostargt/profilecard/?igsh=MXByenBqdWo2YTRlaQ==" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-600">
            <Instagram className="h-5 w-5 