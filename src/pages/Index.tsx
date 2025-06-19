import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Truck, RotateCcw, CheckCircle, Package, Wrench } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePurchase = async () => {
    setIsLoading(true);
    try {
      // Simulate Stripe checkout process
      toast.success("Redirecting to secure checkout...");
      // In a real implementation, this would redirect to Stripe
      setTimeout(() => {
        setIsLoading(false);
        toast.info("Stripe integration ready for your API keys!");
      }, 2000);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      setIsLoading(false);
    }
  };

  const handleViewDetails = () => {
    // Scroll to the technical specifications section
    const specsSection = document.getElementById('technical-specs');
    if (specsSection) {
      specsSection.scrollIntoView({ behavior: 'smooth' });
      toast.info("Check out the detailed specifications below!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-500/20"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm font-semibold">
              PREMIUM SKATEBOARD WHEELS
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent animate-fade-in">
              Roll Beyond Limits
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in">
              Professional-grade 52mm PU skateboard wheels with ABEC-9 titanium bearings. 
              Built for durability, engineered for performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button 
                onClick={handlePurchase}
                disabled={isLoading}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                {isLoading ? "Processing..." : "Buy Now - $18.99"}
              </Button>
              <Button 
                onClick={handleViewDetails}
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                View Details
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
            Professional Wheel Pack
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((wheel) => (
              <Card key={wheel} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="aspect-square bg-gradient-to-br from-slate-600 to-slate-900 rounded-lg mb-4 flex items-center justify-center">
                    <div className="w-24 h-24 bg-black rounded-full border-4 border-gray-400 relative">
                      <div className="absolute inset-2 bg-gray-700 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">52mm PU Wheel #{wheel}</h3>
                  <p className="text-gray-300 text-sm">95A Hardness • Black Color</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section id="technical-specs" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-700/50 border-slate-600">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <Package className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Material & Build</h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• High resilient Polyurethane (PU)</li>
                  <li>• 95A Hardness rating</li>
                  <li>• Durable, high elasticity construction</li>
                  <li>• Professional black finish</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/50 border-slate-600">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <Wrench className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Dimensions</h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• Height: 52mm (1.56 inches)</li>
                  <li>• Width: 32mm (0.96 inches)</li>
                  <li>• Standard skateboard size</li>
                  <li>• Perfect for rebuilds & repairs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/50 border-slate-600">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <RotateCcw className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">ABEC-9 Bearings</h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• Titanium chrome steel construction</li>
                  <li>• Inner Diameter: ~8mm</li>
                  <li>• Outer Diameter: ~22mm</li>
                  <li>• Thickness: ~7mm</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Why Choose Our Wheels?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Premium PU Material</h3>
              <p className="text-gray-400">High resilient Polyurethane with 95A hardness for optimal performance</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <RotateCcw className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">ABEC-9 Precision</h3>
              <p className="text-gray-400">Titanium chrome steel bearings for smooth rolling and superior speed</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-16 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Perfect Fit</h3>
              <p className="text-gray-400">Standard 52x32mm dimensions fit most skateboard setups</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-r from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Complete Package</h3>
              <p className="text-gray-400">4 wheels + 8 bearings - everything you need for a full rebuild</p>
            </div>
          </div>
        </div>
      </section>

      {/* Package Contents */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">What's Included</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-to-br from-slate-700 to-slate-800 border-orange-500 border-2">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl font-bold text-white">4</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Skateboard Wheels</h3>
                    <p className="text-gray-300">52mm x 32mm Black PU wheels with 95A hardness</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl font-bold text-white">8</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">ABEC-9 Bearings</h3>
                    <p className="text-gray-300">Titanium chrome steel bearings for smooth performance</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">What Riders Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Alex Chen", text: "The ABEC-9 bearings make such a difference! Super smooth ride.", rating: 5 },
              { name: "Maria Rodriguez", text: "Perfect replacement wheels. The 95A hardness is just right for street skating.", rating: 5 },
              { name: "Jake Thompson", text: "Quality PU material that actually lasts. Great value for the complete set!", rating: 5 }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                  <p className="font-semibold text-white">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-white">Complete Wheel & Bearing Set</h2>
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-orange-500 border-2">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4 text-white">Professional 4-Pack</h3>
                  <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                    $18.99
                  </div>
                  <p className="text-gray-400 mb-6">Complete set: 4 wheels + 8 ABEC-9 bearings</p>
                  <ul className="text-left space-y-2 mb-8">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      4x 52mm PU wheels (95A hardness)
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      8x ABEC-9 titanium chrome bearings
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Professional black finish
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      30-day money-back guarantee
                    </li>
                  </ul>
                  <Button 
                    onClick={handlePurchase}
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    {isLoading ? "Processing..." : "Order Complete Set - $18.99"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-blue-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Upgrade Your Setup?</h2>
          <p className="text-xl mb-8 text-white/90">Professional-grade wheels and bearings for serious riders</p>
          <Button 
            onClick={handlePurchase}
            disabled={isLoading}
            className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          >
            {isLoading ? "Processing..." : "Get Your Complete Set Now"}
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 Premium Wheels Co. All rights reserved.</p>
          <p className="text-gray-500 mt-2">Professional skateboard wheels with ABEC-9 bearings</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
