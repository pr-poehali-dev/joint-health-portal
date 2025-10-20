import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4">Контакты</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Как нас найти</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Icon name="MapPin" className="text-primary" size={24} />
              </div>
              <CardTitle>Адрес</CardTitle>
              <CardDescription className="text-base">
                г. Москва, ул. Медицинская, 15
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Icon name="Phone" className="text-primary" size={24} />
              </div>
              <CardTitle>Телефон</CardTitle>
              <CardDescription className="text-base">
                +7 (495) 123-45-67
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Icon name="Mail" className="text-primary" size={24} />
              </div>
              <CardTitle>Email</CardTitle>
              <CardDescription className="text-base">
                info@sustavklinik.ru
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
