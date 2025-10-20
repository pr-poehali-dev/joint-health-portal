import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const DiseasesSection = () => {
  const diseases = [
    {
      name: 'Артроз',
      description: 'Дегенеративное заболевание суставного хряща',
      symptoms: ['Боль при движении', 'Скованность по утрам', 'Хруст в суставах']
    },
    {
      name: 'Артрит',
      description: 'Воспалительное заболевание суставов',
      symptoms: ['Припухлость', 'Покраснение кожи', 'Повышение температуры']
    },
    {
      name: 'Бурсит',
      description: 'Воспаление суставной сумки',
      symptoms: ['Локальная боль', 'Отёк', 'Ограничение движений']
    },
    {
      name: 'Тендинит',
      description: 'Воспаление сухожилий',
      symptoms: ['Боль при нагрузке', 'Припухлость', 'Слабость мышц']
    }
  ];

  return (
    <section id="diseases" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4">Заболевания</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Заболевания суставов</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Основные заболевания, которые мы успешно лечим
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {diseases.map((disease, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center space-x-3">
                    <Icon name="AlertCircle" className="text-primary" size={24} />
                    <span>{disease.name}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-700 mb-4">{disease.description}</p>
                    <div className="font-semibold mb-2">Основные симптомы:</div>
                    <ul className="space-y-2">
                      {disease.symptoms.map((symptom, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={16} />
                          <span className="text-gray-600">{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default DiseasesSection;
