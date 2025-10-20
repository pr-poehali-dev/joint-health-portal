import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const ServicesSection = () => {
  const services = [
    {
      icon: 'Stethoscope',
      title: 'Консультация ортопеда',
      description: 'Комплексный осмотр и диагностика заболеваний суставов'
    },
    {
      icon: 'Activity',
      title: 'Артроскопия',
      description: 'Малоинвазивное хирургическое лечение суставов'
    },
    {
      icon: 'Zap',
      title: 'Физиотерапия',
      description: 'Современные методы восстановления и реабилитации'
    },
    {
      icon: 'Heart',
      title: 'PRP-терапия',
      description: 'Лечение суставов обогащенной тромбоцитами плазмой'
    },
    {
      icon: 'FileText',
      title: 'УЗИ суставов',
      description: 'Точная диагностика состояния суставов и мягких тканей'
    },
    {
      icon: 'Shield',
      title: 'Протезирование',
      description: 'Замена поврежденных суставов на искусственные'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4">Услуги</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Комплексный подход к лечению заболеваний суставов с использованием современных методик
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={service.icon} className="text-primary" size={24} />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
