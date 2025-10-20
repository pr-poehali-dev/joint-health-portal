import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const ReviewsSection = () => {
  const reviews = [
    {
      name: 'Мария К.',
      text: 'Огромная благодарность доктору Иванову! После артроскопии колена вернулась к активной жизни. Профессионализм на высшем уровне!',
      rating: 5,
      date: '2 недели назад'
    },
    {
      name: 'Александр П.',
      text: 'Прошёл курс PRP-терапии для лечения артроза. Результат превзошёл ожидания. Боли практически ушли!',
      rating: 5,
      date: '1 месяц назад'
    },
    {
      name: 'Ольга В.',
      text: 'Очень внимательное отношение, качественная диагностика. Рекомендую всем, кто столкнулся с проблемами суставов.',
      rating: 5,
      date: '3 недели назад'
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4">Отзывы</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Отзывы наших пациентов</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы гордимся доверием наших пациентов
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{review.text}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="font-semibold text-gray-900">{review.name}</span>
                  <span>{review.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
