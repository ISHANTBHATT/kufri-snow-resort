import { Card, CardContent } from "@/components/ui/card";

export default function ProjectsSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Transform Your Work And Living Space
          <br />
          With Style, Comfort And Functionality
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="overflow-hidden">
            <img
              src="/placeholder.svg?height=600&width=800"
              alt="Unique design showcase"
              className="w-full h-[400px] object-cover"
            />
            <CardContent className="p-6">
              <h3 className="text-sm text-muted-foreground mb-2">
                UNIQUE DESIGNS
              </h3>
              <h4 className="text-2xl font-bold">Elevate Your Spaces Today</h4>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <img
              src="/placeholder.svg?height=600&width=800"
              alt="Rustic design showcase"
              className="w-full h-[400px] object-cover"
            />
            <CardContent className="p-6">
              <h3 className="text-sm text-muted-foreground mb-2">
                RUSTIC DESIGN
              </h3>
              <h4 className="text-2xl font-bold">Inspired Designs</h4>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-4xl font-bold mb-2">8K</h3>
            <p className="text-muted-foreground">WORLDWIDE BRANCHES</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2">125K</h3>
            <p className="text-muted-foreground">SATISFY CUSTOMERS</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2">50K</h3>
            <p className="text-muted-foreground">TECHNICAL TEAMS</p>
          </div>
        </div>
      </div>
    </section>
  );
}
