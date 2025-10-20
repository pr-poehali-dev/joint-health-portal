import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const BlogSection = () => {
  const navigate = useNavigate();

  const blogPosts = [
    {
      title: '5 упражнений для здоровья коленных суставов',
      excerpt: 'Регулярные упражнения помогают укрепить мышцы вокруг коленного сустава и улучшить его подвижность. Рассмотрим эффективные упражнения для ежедневной практики.',
      category: 'Профилактика',
      readTime: '5 мин',
      date: '15 октября 2024',
      image: 'https://cdn.poehali.dev/projects/78d1c7d0-fad4-479e-b15b-8c4122c87bd4/files/725ff225-5cda-4a1c-a14d-dc40a9b0222e.jpg'
    },
    {
      title: 'Питание для здоровья суставов: что важно знать',
      excerpt: 'Правильное питание играет ключевую роль в поддержании здоровья суставов. Узнайте, какие продукты помогают укрепить хрящевую ткань и снизить воспаление.',
      category: 'Питание',
      readTime: '7 мин',
      date: '12 октября 2024',
      image: 'https://cdn.poehali.dev/projects/78d1c7d0-fad4-479e-b15b-8c4122c87bd4/files/bf406fa6-4126-4fa7-b30f-717cdf7c73b0.jpg'
    },
    {
      title: 'Ранние признаки артроза: когда обратиться к врачу',
      excerpt: 'Артроз развивается постепенно, и важно распознать первые симптомы. Раннее обращение к специалисту значительно повышает эффективность лечения.',
      category: 'Диагностика',
      readTime: '6 мин',
      date: '8 октября 2024',
      image: 'https://cdn.poehali.dev/projects/78d1c7d0-fad4-479e-b15b-8c4122c87bd4/files/cfa5d3e2-21f8-4ecc-b0ae-aa804c42cb04.jpg'
    },
    {
      title: 'Современные методы лечения артрита',
      excerpt: 'Медицина не стоит на месте. Узнайте о современных подходах к лечению артрита: от медикаментозной терапии до инновационных биологических препаратов.',
      category: 'Лечение',
      readTime: '8 мин',
      date: '5 октября 2024',
      image: 'https://cdn.poehali.dev/projects/78d1c7d0-fad4-479e-b15b-8c4122c87bd4/files/725ff225-5cda-4a1c-a14d-dc40a9b0222e.jpg'
    },
    {
      title: 'Реабилитация после эндопротезирования сустава',
      excerpt: 'Успешная реабилитация — залог возвращения к полноценной жизни после операции. Разбираем этапы восстановления и важные рекомендации.',
      category: 'Реабилитация',
      readTime: '10 мин',
      date: '1 октября 2024',
      image: 'https://cdn.poehali.dev/projects/78d1c7d0-fad4-479e-b15b-8c4122c87bd4/files/bf406fa6-4126-4fa7-b30f-717cdf7c73b0.jpg'
    },
    {
      title: 'Профилактика заболеваний суставов в разном возрасте',
      excerpt: 'Забота о суставах важна в любом возрасте. Узнайте, какие профилактические меры наиболее эффективны для разных возрастных групп.',
      category: 'Профилактика',
      readTime: '6 мин',
      date: '28 сентября 2024',
      image: 'https://cdn.poehali.dev/projects/78d1c7d0-fad4-479e-b15b-8c4122c87bd4/files/cfa5d3e2-21f8-4ecc-b0ae-aa804c42cb04.jpg'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4">Блог</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Полезные статьи о здоровье суставов</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Экспертные советы, актуальная информация и рекомендации наших специалистов
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => navigate('/blog/1')}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-white">
                  {post.category}
                </Badge>
              </div>
              <CardHeader>
                <div className="flex items-center text-sm text-gray-500 mb-2 space-x-4">
                  <div className="flex items-center space-x-1">
                    <Icon name="Calendar" size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {post.excerpt}
                </CardDescription>
                <Button variant="link" className="px-0 mt-2 group-hover:translate-x-2 transition-transform">
                  Читать далее <Icon name="ArrowRight" size={16} className="ml-1" />
                </Button>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="text-lg px-8">
            Все статьи блога
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
