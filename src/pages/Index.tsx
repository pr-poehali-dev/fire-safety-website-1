import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const equipment = [
    {
      title: "Огнетушители",
      description: "Профессиональные огнетушители различных типов для любых задач",
      icon: "Flame",
      category: "Средства пожаротушения"
    },
    {
      title: "Пожарные каски",
      description: "Защитные каски и шлемы для профессиональных пожарных",
      icon: "Shield",
      category: "Защитное снаряжение"
    },
    {
      title: "Дыхательные аппараты",
      description: "Современные системы дыхания для работы в задымленных помещениях",
      icon: "Wind",
      category: "Системы безопасности"
    },
    {
      title: "Пожарные рукава",
      description: "Высокопрочные рукава и соединительная арматура",
      icon: "Waves",
      category: "Водоподающее оборудование"
    },
    {
      title: "Системы сигнализации",
      description: "Автоматические системы обнаружения и оповещения о пожаре",
      icon: "Bell",
      category: "Сигнализация"
    },
    {
      title: "Противопожарные двери",
      description: "Огнестойкие двери и ворота для эвакуационных путей",
      icon: "DoorOpen",
      category: "Конструкции"
    }
  ];

  const services = [
    {
      title: "Проектирование",
      description: "Разработка проектов пожарной безопасности",
      icon: "FileText"
    },
    {
      title: "Монтаж",
      description: "Профессиональная установка оборудования",
      icon: "Wrench"
    },
    {
      title: "Обслуживание",
      description: "Техническое обслуживание и ремонт",
      icon: "Settings"
    },
    {
      title: "Обучение",
      description: "Подготовка персонала по пожарной безопасности",
      icon: "GraduationCap"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-secondary">ПожБезопасность</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Главная</a>
              <a href="#catalog" className="text-gray-700 hover:text-primary transition-colors">Каталог</a>
              <a href="#equipment" className="text-gray-700 hover:text-primary transition-colors">Оборудование</a>
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
              <a href="#projects" className="text-gray-700 hover:text-primary transition-colors">Проекты</a>
              <a href="#contacts" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="hidden md:inline-flex">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-secondary to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Профессиональное оборудование для 
                <span className="text-primary"> пожарной безопасности</span>
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                Надёжные решения для защиты жизни и имущества. 
                Более 15 лет опыта на рынке пожарной безопасности.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Каталог товаров
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-secondary">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать проект
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="/img/b320d937-ddc5-4198-963b-6f8aef89c683.jpg" 
                alt="Профессиональное пожарное оборудование" 
                className="rounded-lg shadow-2xl max-w-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section id="equipment" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
              Каталог оборудования
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Широкий ассортимент сертифицированного оборудования от ведущих производителей
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipment.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={item.icon} size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <span className="text-sm text-gray-500">{item.category}</span>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full hover:bg-primary hover:text-white">
                    <Icon name="Eye" size={16} className="mr-2" />
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Комплексный подход к обеспечению пожарной безопасности
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-lg">Выполненных проектов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15</div>
              <div className="text-lg">Лет на рынке</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-lg">Довольных клиентов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-lg">Техподдержка</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-gray-600">
              Готовы ответить на ваши вопросы и предложить лучшие решения
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={32} className="text-white" />
                </div>
                <CardTitle>Телефон</CardTitle>
                <CardDescription className="text-lg">
                  +7 (495) 123-45-67<br/>
                  +7 (800) 555-01-02
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={32} className="text-white" />
                </div>
                <CardTitle>Email</CardTitle>
                <CardDescription className="text-lg">
                  info@pozhbezopasnost.ru<br/>
                  sales@pozhbezopasnost.ru
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={32} className="text-white" />
                </div>
                <CardTitle>Адрес</CardTitle>
                <CardDescription className="text-lg">
                  г. Москва, ул. Промышленная, 15<br/>
                  БЦ "Пожарный", оф. 301
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Shield" size={32} className="text-primary" />
              <span className="text-2xl font-bold">ПожБезопасность</span>
            </div>
            <div className="text-gray-400">
              © 2024 ПожБезопасность. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;