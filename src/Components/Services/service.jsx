import  { useState } from "react";

function ServiceSection() {
  // Define state to keep track of which card's description is expanded
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);

  // Function to toggle the description of a card
  const toggleDescription = (index) => {
    if (expandedCardIndex === index) {
      // If the clicked card is already expanded, collapse it
      setExpandedCardIndex(null);
    } else {
      // Otherwise, expand the clicked card
      setExpandedCardIndex(index);
    }
  };
  const services = [
    {
      title: 'Programming',
      imageUrl: 'https://d1ng1bucl7w66k.cloudfront.net/ghost-blog/2022/07/Screen-Shot-2022-07-11-at-11.36.48-AM.png',
      description: `At UED, we're passionate about empowering the next generation with essential programming skills. 
      Through our Programming Education Partnership, we collaborate with schools to offer comprehensive programming courses tailored to students of all ages. 
      Our expert instructors guide students through hands-on learning experiences, teaching fundamental concepts and cutting-edge technologies. 
      From coding basics to advanced software development, we provide engaging curriculum and resources to ignite curiosity and foster innovation.
      Join us in preparing students for success in the digital age with our dynamic programming education program.`,
      
    },
    {
      title: 'Robotics',
      imageUrl: 'https://www.teachkidsrobotics.com/wp-content/uploads/2021/12/flickr_StephenChin_CCBY20.jpg',
      description: 'Prepare your child for the future with our dynamic Robotics Education Program. At [School Name], we offer an immersive learning experience that combines hands-on activities with cutting-edge technology. Our expert instructors guide students through the exciting world of robotics, fostering creativity, problem-solving skills, and teamwork. Through engaging projects and competitions, students gain practical experience and confidence in STEM fields. Join us and empower your child to become a confident innovator in the digital age',
    },
    {
      title: 'Globalization',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_E6vG97mr7q5kx-SEVZz7B6f7MqtXFGoPMpUc6AQXkA&s',
      description: 'we believe in the power of diversity and connection. Our Global Student Community offers a unique opportunity for students to broaden their perspectives and forge friendships with peers from around the world. Through virtual exchanges, collaborative projects, and cultural events, students can engage in meaningful dialogue, learn about different cultures, and work together to address global challenges. Join us and be part of a vibrant community where curiosity knows no bounds and the world becomes your classroom.',
    },
    {
      title: 'Culture and Arts',
      imageUrl: 'https://thumbs.dreamstime.com/b/university-students-sitting-together-table-books-laptop-happy-young-people-doing-group-study-library-130491501.jpg',
      description: 'Sports not only promote physical fitness but also instill important values such as teamwork, discipline, and resilience. Our Sports Program provides students with the opportunity to develop both their athletic skills and character, setting them up for success both on and off the field',
    },
    {
      title: 'Sports',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq15DgkPvUBeH7u-K3odYIYMPieIh9qzEQmED7IREMvQ&s',
      description: 'Sports not only promote physical fitness but also instill important values such as teamwork, discipline, and resilience. Our Sports Program provides students with the opportunity to develop both their athletic skills and character, setting them up for success both on and off the field.',
    },
    {
      title: 'Parent Teacher Training',
      imageUrl: 'https://www.savethestudent.org/uploads/Woman-student-graduate-university-cambridge-money-pound-signs-cash.jpg',
      description: 'Sports not only promote physical fitness but also instill important values such as teamwork, discipline, and resilience. Our Sports Program provides students with the opportunity to develop both their athletic skills and character, setting them up for success both on and off the field',
    }
  ];

  return (
    <div className="bg-white py-12" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <img src={service.imageUrl} alt={service.title} className="w-full h-56 object-cover rounded-t-lg" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-red-600 mb-2">{service.title}</h3>
                {/* Conditional rendering of description based on expandedCardIndex */}
                <p className="text-gray-600">
                  {expandedCardIndex === index ? service.description : `${service.description.slice(0, 150)}...`}
                </p>
                {/* Render toggle button */}
                <button onClick={() => toggleDescription(index)} className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  {expandedCardIndex === index ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
