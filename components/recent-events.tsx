export default function RecentEvents() {
  const events = [
    {
      title: 'काव्य संध्या',
      date: 'March 15, 2024',
      image: 'https://images.unsplash.com/photo-1528605105345-5344ea20e269?q=80&w=2070',
      description: 'An evening of poetry and cultural performances',
    },
    {
      title: 'हिंदी दिवस समारोह',
      date: 'February 28, 2024',
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069',
      description: 'Celebrating Hindi Diwas with various cultural activities',
    },
    {
      title: 'साहित्यिक गोष्ठी',
      date: 'January 20, 2024',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070',
      description: 'Literary discussion and book reading session',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Recent Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={event.image}
                  alt={event.title}
                  className="object-cover w-full h-48"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-muted-foreground text-sm mb-2">{event.date}</p>
                <p className="text-card-foreground">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}