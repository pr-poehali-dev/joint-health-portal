import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const BlogPost = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-primary hover:text-secondary transition-colors"
            >
              <Icon name="ArrowLeft" size={20} />
              <span className="font-semibold">Назад к сайту</span>
            </button>
            <h1 className="text-xl font-bold text-gray-900">Медицинский центр</h1>
          </div>
        </div>
      </nav>

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <Badge className="mb-4">Профилактика</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            5 упражнений для здоровья коленных суставов
          </h1>
          <div className="flex items-center space-x-6 text-gray-600 mb-6">
            <div className="flex items-center space-x-2">
              <Icon name="Calendar" size={18} />
              <span>15 октября 2024</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={18} />
              <span>5 минут чтения</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="User" size={18} />
              <span>Доктор Иванов А.С.</span>
            </div>
          </div>
        </div>

        <img 
          src="https://cdn.poehali.dev/projects/78d1c7d0-fad4-479e-b15b-8c4122c87bd4/files/725ff225-5cda-4a1c-a14d-dc40a9b0222e.jpg"
          alt="Упражнения для коленных суставов"
          className="w-full h-96 object-cover rounded-xl mb-12 shadow-lg"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Регулярные упражнения помогают укрепить мышцы вокруг коленного сустава и улучшить его подвижность. 
            В этой статье мы рассмотрим пять эффективных упражнений, которые можно выполнять в домашних условиях.
          </p>

          <Card className="bg-blue-50 border-blue-200 p-6 mb-8">
            <div className="flex items-start space-x-3">
              <Icon name="Info" size={24} className="text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Важно помнить</h3>
                <p className="text-gray-700">
                  Перед началом любых упражнений проконсультируйтесь с врачом, особенно если у вас есть 
                  хронические заболевания суставов или боли.
                </p>
              </div>
            </div>
          </Card>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Почему важны упражнения для коленей?
          </h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Коленный сустав — один из самых нагруженных суставов в организме. Ежедневно он испытывает 
            значительное давление при ходьбе, подъеме по лестнице и других движениях. Регулярные упражнения 
            помогают:
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start space-x-3">
              <Icon name="CheckCircle2" size={20} className="text-green-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Укрепить мышцы вокруг сустава, снижая нагрузку на хрящ</span>
            </li>
            <li className="flex items-start space-x-3">
              <Icon name="CheckCircle2" size={20} className="text-green-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Улучшить кровообращение и питание хрящевой ткани</span>
            </li>
            <li className="flex items-start space-x-3">
              <Icon name="CheckCircle2" size={20} className="text-green-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Увеличить амплитуду движений и гибкость</span>
            </li>
            <li className="flex items-start space-x-3">
              <Icon name="CheckCircle2" size={20} className="text-green-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Предотвратить развитие артроза и других заболеваний</span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            5 эффективных упражнений
          </h2>

          <div className="space-y-8 mb-12">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center space-x-3">
                <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                <span>Подъем прямой ноги</span>
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Лягте на спину, одну ногу согните в колене, стопа на полу. Вторую ногу держите прямой. 
                Медленно поднимите прямую ногу на высоту согнутого колена. Задержитесь на 3-5 секунд и опустите.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <p className="text-sm text-gray-600">
                  <strong>Повторы:</strong> 10-15 раз на каждую ногу, 2-3 подхода
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center space-x-3">
                <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                <span>Приседания у стены</span>
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Встаньте спиной к стене, ноги на ширине плеч. Медленно скользите спиной вниз, сгибая колени 
                до угла 90 градусов. Удерживайте позицию 10-30 секунд, затем медленно поднимитесь.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <p className="text-sm text-gray-600">
                  <strong>Повторы:</strong> 5-10 раз, постепенно увеличивая время удержания
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center space-x-3">
                <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                <span>Сгибание ног сидя</span>
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Сядьте на стул, спина прямая. Медленно выпрямите одну ногу, напрягая мышцы бедра. 
                Задержитесь на 3 секунды, затем медленно опустите. Чередуйте ноги.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <p className="text-sm text-gray-600">
                  <strong>Повторы:</strong> 10-15 раз на каждую ногу, 2 подхода
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center space-x-3">
                <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span>
                <span>Растяжка задней поверхности бедра</span>
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Лягте на спину, поднимите одну ногу вверх, держа её прямой. Обхватите бедро руками и 
                аккуратно потяните к себе. Почувствуйте растяжение в задней части бедра.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <p className="text-sm text-gray-600">
                  <strong>Повторы:</strong> Удерживайте 20-30 секунд на каждую ногу, 2-3 раза
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center space-x-3">
                <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">5</span>
                <span>Велосипед лежа</span>
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Лягте на спину, поднимите ноги и выполняйте движения, как при езде на велосипеде. 
                Движения должны быть плавными и контролируемыми.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <p className="text-sm text-gray-600">
                  <strong>Повторы:</strong> 1-2 минуты, 2 подхода
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            График тренировок
          </h2>

          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-6 py-4 text-left font-semibold">День недели</th>
                  <th className="px-6 py-4 text-left font-semibold">Упражнения</th>
                  <th className="px-6 py-4 text-left font-semibold">Продолжительность</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Понедельник</td>
                  <td className="px-6 py-4 text-gray-700">Упражнения 1, 2, 3</td>
                  <td className="px-6 py-4 text-gray-700">15-20 минут</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Среда</td>
                  <td className="px-6 py-4 text-gray-700">Упражнения 2, 4, 5</td>
                  <td className="px-6 py-4 text-gray-700">15-20 минут</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Пятница</td>
                  <td className="px-6 py-4 text-gray-700">Все упражнения</td>
                  <td className="px-6 py-4 text-gray-700">25-30 минут</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Воскресенье</td>
                  <td className="px-6 py-4 text-gray-700">Растяжка (упр. 4)</td>
                  <td className="px-6 py-4 text-gray-700">10 минут</td>
                </tr>
              </tbody>
            </table>
          </div>

          <Card className="bg-green-50 border-green-200 p-6 mb-12">
            <div className="flex items-start space-x-3">
              <Icon name="Lightbulb" size={24} className="text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Полезный совет</h3>
                <p className="text-gray-700">
                  Начинайте с минимального количества повторений и постепенно увеличивайте нагрузку. 
                  Если чувствуете боль — остановитесь и проконсультируйтесь с врачом.
                </p>
              </div>
            </div>
          </Card>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Противопоказания
          </h2>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-12">
            <div className="flex items-start space-x-3 mb-4">
              <Icon name="AlertTriangle" size={24} className="text-red-600 flex-shrink-0 mt-1" />
              <h3 className="font-semibold text-gray-900 text-xl">Когда упражнения противопоказаны</h3>
            </div>
            <ul className="space-y-2 ml-9">
              <li className="text-gray-700">• Острая боль в суставе</li>
              <li className="text-gray-700">• Воспалительный процесс</li>
              <li className="text-gray-700">• Недавняя травма или операция</li>
              <li className="text-gray-700">• Высокая температура тела</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Заключение
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Регулярное выполнение этих упражнений поможет сохранить здоровье коленных суставов на долгие годы. 
            Помните, что важна систематичность — лучше заниматься по 15 минут три раза в неделю, чем один раз 
            в месяц по часу.
          </p>

          <p className="text-gray-700 leading-relaxed mb-12">
            Если у вас возникают вопросы или вы хотите получить индивидуальную программу упражнений, 
            запишитесь на консультацию к нашим специалистам.
          </p>

          <div className="border-t border-gray-200 pt-8 mt-12">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  АИ
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Доктор Иванов Алексей Сергеевич</p>
                  <p className="text-gray-600">Врач-ортопед высшей категории, стаж 15 лет</p>
                </div>
              </div>
              <Button onClick={() => navigate('/')} className="px-8">
                Записаться на приём
              </Button>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-white py-16 border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Похожие статьи</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Питание для здоровья суставов',
                category: 'Питание',
                image: 'https://cdn.poehali.dev/projects/78d1c7d0-fad4-479e-b15b-8c4122c87bd4/files/bf406fa6-4126-4fa7-b30f-717cdf7c73b0.jpg'
              },
              {
                title: 'Ранние признаки артроза',
                category: 'Диагностика',
                image: 'https://cdn.poehali.dev/projects/78d1c7d0-fad4-479e-b15b-8c4122c87bd4/files/cfa5d3e2-21f8-4ecc-b0ae-aa804c42cb04.jpg'
              },
              {
                title: 'Современные методы лечения',
                category: 'Лечение',
                image: 'https://cdn.poehali.dev/projects/78d1c7d0-fad4-479e-b15b-8c4122c87bd4/files/725ff225-5cda-4a1c-a14d-dc40a9b0222e.jpg'
              }
            ].map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <Badge className="mb-2">{post.category}</Badge>
                  <h3 className="font-semibold text-gray-900">{post.title}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 Медицинский центр. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default BlogPost;
