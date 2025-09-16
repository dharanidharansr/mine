"use client"

const certificationsData = [
    {
        id: 1,
        title: "MongoDB Certified Associate Developer",
        issuer: "MongoDB University",
        date: "August 2025",
        credentialID: "MDBc40k25dr5s",
        description: "Validated expertise in CRUD operations, data modeling, indexing, and aggregation for scalable application development.",
        skills: ["Node.js", "MongoDB", "Express","CRUD Operations"],
        image: "/MONGODB.png",
        verifyLink: "https://www.udemy.com/certificate/UC-123456789/"
    },
    {
        id: 2,
        title: "Machine Learning Specialization",
        issuer: "Coursera",
        date: "September 2024",
        credentialID: "MLSPEC-987654",
        description: "Advanced machine learning techniques and algorithms with practical applications using Python and TensorFlow.",
        skills: ["Python", "TensorFlow", "Data Science", "Neural Networks"],
        image: "/CIFA.jpeg",
        verifyLink: "https://www.coursera.org/verify/MLSPEC-987654"
    }
]

export default function Certifications() {

	return (
		<section className="py-16 bg-white dark:bg-black px-4" id="certifications">
			<div className="max-w-4xl mx-auto">
				{/* Title */}
				<div className="mb-12 text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
						Certifications
					</h2>
					<p className="text-neutral-600 dark:text-neutral-400 text-sm mt-2">
						Professional certifications and courses
					</p>
				</div>

				{/* Certifications Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{certificationsData.map((certification) => (
						<div key={certification.id} className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
							{/* Certificate Info */}
							<div className="p-6">
								<div className="space-y-4">
									{/* Header */}
									<div>
										<div className="flex items-center gap-2 mb-2">
											<span className="text-xs bg-black dark:bg-white text-white dark:text-black px-2 py-1 rounded">
												{certification.issuer}
											</span>
										</div>
										<h2 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-1">
											{certification.title}
										</h2>
										<p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
											{certification.description}
										</p>
									</div>

									{/* Certificate Details */}
									<div className="space-y-2 text-sm">
										<div className="flex items-center gap-2">
											<span className="font-medium text-black dark:text-white">Issued:</span>
											<span className="text-neutral-600 dark:text-neutral-400">{certification.date}</span>
										</div>
										<div className="flex items-center gap-2">
											<span className="font-medium text-black dark:text-white">Credential ID:</span>
											<span className="text-neutral-600 dark:text-neutral-400">{certification.credentialID}</span>
										</div>
										<div className="flex items-start gap-2">
											<span className="font-medium text-black dark:text-white">Skills:</span>
											<div className="flex flex-wrap gap-1">
												{certification.skills.map((skill, index) => (
													<span
														key={index}
														className="text-xs bg-white dark:bg-black text-black dark:text-white px-2 py-1 rounded border border-neutral-200 dark:border-neutral-700"
													>
														{skill}
													</span>
												))}
											</div>
										</div>
									</div>

									{/* Certificate Image */}
									<div className="w-full bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 overflow-hidden shadow-lg">
										<div className="relative w-full" style={{ aspectRatio: '1075/921' }}>
											<img
												src={certification.image || `https://via.placeholder.com/1075x921/e5e5e5/666666?text=${encodeURIComponent(certification.title)}+Certificate`}
												alt={`${certification.title} Certificate`}
												className="w-full h-full object-cover object-center"
												style={{ objectPosition: 'center' }}
												onError={(e) => {
													e.target.src = `https://via.placeholder.com/1075x921/e5e5e5/666666?text=${encodeURIComponent(certification.title)}+Certificate`;
												}}
											/>
										</div>
									</div>
									
									{/* Verify Button */}
									<a 
										href={certification.verifyLink} 
										target="_blank" 
										rel="noopener noreferrer" 
										className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg text-sm font-medium hover:opacity-80 transition-opacity"
									>
										<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
											<path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
										</svg>
										Verify Certificate
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
				
				{/* Call to action */}
				<div className="mt-12 text-center">
					<p className="text-neutral-600 dark:text-neutral-400 text-lg mb-4">
						Continuous learning is key to staying up-to-date in the tech industry
					</p>
					<a 
						href="#contact" 
						className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 text-black dark:text-white rounded-xl font-medium hover:scale-105 hover:shadow-lg transition-all"
					>
						<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
						</svg>
						Let's discuss my qualifications
					</a>
				</div>
			</div>
		</section>
	)
}
