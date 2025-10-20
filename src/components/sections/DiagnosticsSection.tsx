import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const DiagnosticsSection = () => {
  const diagnostics = [
    { name: 'Рентгенография', time: '15 минут', description: 'Базовое исследование структуры костей и суставов' },
    { name: 'МРТ суставов', time: '30-40 минут', description: 'Детальная визуализация мягких тканей, хрящей и связок' },
    { name: 'КТ', time: '20 минут', description: 'Трехмерное изображение костных структур' },
    { name: 'УЗИ', time: '20 минут', description: 'Оценка состояния мягких тканей вокруг сустава' },
    { name: 'Артроскопия', time: '1-2 часа', description: 'Визуальный осмотр сустава изнутри' }
  ];

  return (
    <section id="diagnostics" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4">Диагностика</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Методы диагностики</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Современное оборудование для точной постановки диагноза
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diagnostics.map((diagnostic, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl">{diagnostic.name}</CardTitle>
                  <Badge variant="secondary" className="ml-2">{diagnostic.time}</Badge>
                </div>
                <CardDescription className="text-base">{diagnostic.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Card className="max-w-3xl mx-auto bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Icon name="Info" className="text-primary flex-shrink-0 mt-1" size={24} />
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-2">Важная информация</h3>
                  <p className="text-gray-700">
                    Все виды диагностики проводятся на современном оборудовании экспертного класса. 
                    Результаты готовы в течение 1-2 часов.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticsSection;
