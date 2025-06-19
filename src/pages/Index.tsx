
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Truck, RotateCcw, CheckCircle } from "lucide-react";
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
              Experience the ultimate ride with our premium 4-pack skateboard wheels. 
              Engineered for speed, built for style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button 
                onClick={handlePurchase}
                disabled={isLoading}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                {isLoading ? "Processing..." : "Buy Now - $89.99"}
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300"
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
            Premium Wheel Pack
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((wheel) => (
              <Card key={wheel} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="aspect-square bg-gradient-to-br from-orange-400 to-blue-500 rounded-lg mb-4 flex items-center justify-center">
                    <div className="w-24 h-24 bg-slate-800 rounded-full border-4 border-white"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Wheel #{wheel}</h3>
                  <p className="text-gray-300">Premium urethane construction</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Why Choose Our Wheels?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Premium Quality</h3>
              <p className="text-gray-400">Made from the finest urethane materials for maximum durability</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <RotateCcw className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Perfect Roll</h3>
              <p className="text-gray-400">Engineered for smooth rolling and superior grip</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Fast Shipping</h3>
              <p className="text-gray-400">Get your wheels delivered in 2-3 business days</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-r from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Guaranteed</h3>
              <p className="text-gray-400">30-day money-back guarantee on all orders</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">What Riders Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Alex Chen", text: "These wheels transformed my skating experience. Incredible quality!", rating: 5 },
              { name: "Maria Rodriguez", text: "Best wheels I've ever used. Worth every penny!", rating: 5 },
              { name: "Jake Thompson", text: "Smooth as butter and built to last. Highly recommend!", rating: 5 }
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
            <h2 className="text-4xl font-bold mb-8 text-white">Get Your Premium Wheel Pack</h2>
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-orange-500 border-2">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4 text-white">Premium 4-Pack</h3>
                  <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                    $89.99
                  </div>
                  <p className="text-gray-400 mb-6">Complete set of 4 premium skateboard wheels</p>
                  <ul className="text-left space-y-2 mb-8">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Premium urethane construction
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Professional grade quality
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Free shipping included
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
                    {isLoading ? "Processing..." : "Order Now - $89.99"}
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
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Upgrade Your Ride?</h2>
          <p className="text-xl mb-8 text-white/90">Join thousands of satisfied skaters worldwide</p>
          <Button 
            onClick={handlePurchase}
            disabled={isLoading}
            className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          >
            {isLoading ? "Processing..." : "Get Your Wheels Now"}
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 Premium Wheels Co. All rights reserved.</p>
          <p className="text-gray-500 mt-2">Stripe integration ready for secure checkout</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
