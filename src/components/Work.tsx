export default function Work() {
  const jobs = [
    { title: "Backend Developer Intern", company: "Some Company", period: "2025" },
    { title: "Software Engineer Intern", company: "Another Company", period: "2024" },
    { title: "Frontend Developer Volunteer", company: "Open Source Project", period: "2023" },
  ];

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold">Work</h2>
      <ul className="mt-4 space-y-4">
        {jobs.map((job, i) => (
          <li key={i}>
            <p className="font-medium">{job.title}</p>
            <span className="text-sm text-gray-600">{job.company} • {job.period}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

