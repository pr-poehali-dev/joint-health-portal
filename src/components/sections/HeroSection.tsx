import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="bg-secondary text-white">Современная медицина</Badge>
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Здоровье ваших суставов — наша забота
            </h1>
            <p className="text-xl text-gray-600">
              Профессиональная диагностика, лечение и реабилитация заболеваний суставов с применением современных технологий
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => scrollToSection('appointment')} className="text-lg px-8">
                Записаться на приём
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('services')} className="text-lg px-8">
                Наши услуги
              </Button>
            </div>
            <div className="flex items-center space-x-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-gray-600">лет опыта</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">5000+</div>
                <div className="text-sm text-gray-600">пациентов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-gray-600">положительных отзывов</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://cdn.poehali.dev/projects/78d1c7d0-fad4-479e-b15b-8c4122c87bd4/files/bf406fa6-4126-4fa7-b30f-717cdf7c73b0.jpg" 
              alt="Анатомия сустава" 
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
