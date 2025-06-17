export const metadata = {
  title: "Our Services - Menrva Healthcare | Blood Testing Services in Mumbai",
  description: "Comprehensive blood testing services at your doorstep in Mumbai. From basic health checkups to specialized tests, we offer all types of diagnostic services at discounted rates.",
};

export default function Services() {
  const serviceCategories = [
    {
      category: "Basic Health Panels",
      description: "Essential health monitoring tests for routine checkups",
      services: [
        { name: "Complete Blood Count (CBC)", description: "Basic blood analysis for overall health", price: "₹200" },
        { name: "Basic Metabolic Panel", description: "Glucose, electrolytes, kidney function", price: "₹350" },
        { name: "Lipid Profile", description: "Cholesterol and triglycerides", price: "₹250" },
        { name: "Liver Function Test", description: "Liver enzymes and bilirubin", price: "₹300" },
        { name: "Kidney Function Test", description: "Creatinine, BUN, uric acid", price: "₹280" }
      ]
    },
    {
      category: "Diabetes Care",
      description: "Comprehensive diabetes monitoring and management",
      services: [
        { name: "HbA1c (Glycated Hemoglobin)", description: "3-month average blood sugar", price: "₹400" },
        { name: "Fasting Blood Sugar", description: "Morning glucose levels", price: "₹80" },
        { name: "Post Prandial Glucose", description: "After meal blood sugar", price: "₹80" },
        { name: "Insulin Levels", description: "Fasting and post meal insulin", price: "₹600" },
        { name: "Diabetes Complete Package", description: "All diabetes tests combined", price: "₹800" }
      ]
    },
    {
      category: "Heart Health",
      description: "Cardiovascular risk assessment and monitoring",
      services: [
        { name: "Troponin I/T", description: "Heart attack markers", price: "₹800" },
        { name: "CK-MB", description: "Heart muscle damage indicator", price: "₹300" },
        { name: "Homocysteine", description: "Heart disease risk marker", price: "₹1200" },
        { name: "hs-CRP", description: "Inflammation marker", price: "₹500" },
        { name: "Heart Health Complete", description: "Comprehensive cardiac panel", price: "₹1500" }
      ]
    },
    {
      category: "Thyroid Function",
      description: "Complete thyroid health assessment",
      services: [
        { name: "TSH (Thyroid Stimulating Hormone)", description: "Primary thyroid function test", price: "₹200" },
        { name: "Free T3", description: "Active thyroid hormone", price: "₹250" },
        { name: "Free T4", description: "Thyroid hormone levels", price: "₹250" },
        { name: "Anti-TPO", description: "Thyroid antibodies", price: "₹600" },
        { name: "Thyroid Complete Package", description: "All thyroid tests", price: "₹900" }
      ]
    },
    {
      category: "Women's Health",
      description: "Specialized health tests for women",
      services: [
        { name: "Pregnancy Test (Beta hCG)", description: "Early pregnancy detection", price: "₹300" },
        { name: "PCOS Profile", description: "Hormonal evaluation for PCOS", price: "₹1500" },
        { name: "Fertility Hormones", description: "FSH, LH, Estradiol, Progesterone", price: "₹1200" },
        { name: "Menopause Panel", description: "Hormonal changes assessment", price: "₹800" },
        { name: "Women's Health Complete", description: "Comprehensive women's panel", price: "₹2000" }
      ]
    },
    {
      category: "Senior Citizen Care",
      description: "Health monitoring tailored for elderly patients",
      services: [
        { name: "Vitamin B12", description: "B12 deficiency assessment", price: "₹400" },
        { name: "Vitamin D", description: "Bone health indicator", price: "₹800" },
        { name: "Bone Markers", description: "Calcium, phosphorus, ALP", price: "₹500" },
        { name: "Prostate Specific Antigen (PSA)", description: "Prostate health for men", price: "₹600" },
        { name: "Senior Citizen Package", description: "Age-appropriate health panel", price: "₹1800" }
      ]
    },
    {
      category: "Infection Screening",
      description: "Detection and monitoring of infections",
      services: [
        { name: "COVID-19 RT-PCR", description: "COVID detection test", price: "₹500" },
        { name: "Malaria Test", description: "Malaria parasite detection", price: "₹200" },
        { name: "Dengue Test", description: "Dengue fever diagnosis", price: "₹800" },
        { name: "Typhoid Test", description: "Typhoid fever detection", price: "₹300" },
        { name: "Hepatitis B & C", description: "Liver infection screening", price: "₹600" }
      ]
    },
    {
      category: "Allergy Testing",
      description: "Comprehensive allergy and sensitivity testing",
      services: [
        { name: "Food Allergy Panel", description: "Common food allergens", price: "₹3000" },
        { name: "Environmental Allergy", description: "Dust, pollen, pet dander", price: "₹2500" },
        { name: "Drug Allergy Panel", description: "Medication sensitivity", price: "₹2000" },
        { name: "Total IgE", description: "Overall allergy indicator", price: "₹400" },
        { name: "Comprehensive Allergy Panel", description: "All allergy tests", price: "₹5000" }
      ]
    }
  ];

  const whatsappNumber = '+919876543210';
  const whatsappMessage = 'Hello! I am interested in your blood testing services. Please provide more details about pricing and booking.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Blood Testing Services
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              From basic health checkups to specialized diagnostic tests, we offer a complete range of 
              blood testing services at your doorstep across Mumbai with discounted rates.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 inline-flex items-center space-x-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.097"/>
              </svg>
              <span>Get Quote on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {serviceCategories.map((category, index) => (
            <div key={index} className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.category}</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                      <span className="text-lg font-bold text-blue-600">{service.price}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <a
                      href={`${whatsappUrl}&text=I am interested in ${service.name} test. Please provide details.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                      Book This Test →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Don't See Your Required Test?</h2>
          <p className="text-xl text-blue-100 mb-8">
            We offer many more specialized tests and can arrange custom packages. 
            Contact us for any specific diagnostic requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Chat on WhatsApp
            </a>
            <a
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
