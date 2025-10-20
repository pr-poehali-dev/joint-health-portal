import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const SpecialistsSection = () => {
  const specialists = [
    {
      name: 'Иванов Сергей Петрович',
      position: 'Врач-ортопед, травматолог',
      experience: '15 лет опыта',
      specialization: 'Артроскопия, эндопротезирование'
    },
    {
      name: 'Смирнова Елена Викторовна',
      position: 'Врач-ревматолог',
      experience: '12 лет опыта',
      specialization: 'Лечение артритов и артрозов'
    },
    {
      name: 'Петров Дмитрий Александрович',
      position: 'Врач-физиотерапевт',
      experience: '10 лет опыта',
      specialization: 'Реабилитация после операций'
    }
  ];

  return (
    <section id="specialists" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4">Специалисты</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши врачи</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Команда опытных специалистов с многолетней практикой
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {specialists.map((specialist, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                  {specialist.name.split(' ').map(n => n[0]).join('')}
                </div>
                <CardTitle className="text-xl">{specialist.name}</CardTitle>
                <CardDescription className="text-base">
                  <div className="space-y-2 mt-2">
                    <div className="flex items-center justify-center space-x-2">
                      <Icon name="Briefcase" size={16} className="text-primary" />
                      <span>{specialist.position}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Icon name="Award" size={16} className="text-secondary" />
                      <span>{specialist.experience}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">{specialist.specialization}</p>
                  </div>
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialistsSection;
