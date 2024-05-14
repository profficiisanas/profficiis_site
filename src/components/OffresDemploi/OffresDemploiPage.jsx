import React from 'react';
import JobCard from './JobCard'; 

const OffresDemploiPage = () => {
  const offresDemploi = [
    {
      "_id": "6634b19061afc88b7be829aa",
      "title": "Ingénieur logiciel senior",
      "description": "Nous recherchons un ingénieur logiciel senior pour diriger notre équipe de développement.",
      "company": "Tech Innovations Inc.",
      "location": "San Francisco, CA",
      "salaryRange": "120 000 $ - 150 000 $",
      "requirements": [
        "5 ans d'expérience dans le développement logiciel",
        "Expert en Node.js et React"
      ],
      "datePosted": "2023-10-01T00:00:00.000Z"
    },
    {
      "_id": "6634b19061afc88b7be829aa",
      "title": "Ingénieur logiciel senior",
      "description": "Nous recherchons un ingénieur logiciel senior pour diriger notre équipe de développement.",
      "company": "Tech Innovations Inc.",
      "location": "San Francisco, CA",
      "salaryRange": "120 000 $ - 150 000 $",
      "requirements": [
        "5 ans d'expérience dans le développement logiciel",
        "Expert en Node.js et React"
      ],
      "datePosted": "2023-10-01T00:00:00.000Z"
    },
  ];

  return (
    <div className="container mx-auto"><br /> <br />
      <h1 className="text-3xl font-bold my-8 text-center">Offres d'emploi</h1> <br />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {offresDemploi.map((job, index) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default OffresDemploiPage;