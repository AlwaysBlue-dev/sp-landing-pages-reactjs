import LogoEnterprises from "../assets/logo/Austen Enterprise No Background.png";
import LogoFS from "../assets/logo/Austen Fire and Security Horizontal.png";
import LogoE from "../assets/logo/Austen Electric Horizontal.png";
import LogoB from "../assets/logo/Austen Builders Horizontal.png";
import LogoAC from "../assets/logo/Austen Air Conditioning Horizontal.png";
import LogoG from "../assets/logo/Austen Generators Horizontal.png";
import LogoIS from "../assets/logo/Austen Integrated Systems Horizontal.png";
import LogoP from "../assets/logo/Austen Plumbing Horizontal.png";

export const pageData = {
  'austen-ac': {
    name: 'Austen Air Conditioning',
    logo: LogoAC,
    hero: { title: 'Welcome to Your Digital Workspace', description: 'Austen Air Conditioning provides efficient HVAC installation, maintenance, and repair services focused on comfort, energy savings, and air quality.' },
    announcements: [
      { title: 'Company News', description: 'Latest updates from Austen Enterprises' },
      { title: 'Leadership Message', description: 'A message from our CEO' },
      { title: 'Event Announcement', description: 'Upcoming company-wide event' },
      { title: 'Policy Change', description: 'New hybrid work policy effective next month' },
      { title: 'IT Alert', description: 'System maintenance scheduled for this weekend' },
      { title: 'Training Deadline', description: 'Complete safety training by Nov 5' }
    ],
     quickAccess: [
      { title: 'Onboarding Documents', description: 'Access all necessary documents to complete your onboarding process', icon: 'fa-user-plus', link: '/onboarding-documents' },
      { title: 'Offboarding Procedures', description: 'Follow the steps and access resources for a smooth offboarding process', icon: 'fas fa-sign-out-alt', link: '/project-plans' },
      { title: 'PTO Request Forms', description: 'Submit and manage your paid time off requests with ease', icon: 'fas fa-calendar-check', link: '/training-materials' },
      { title: 'Policies', description: 'Explore company policies aligned with our standards and best practices', icon: 'fas fa-file-alt', link: '/safety-guidelines' },
      { title: 'Standard Operating Procedures', description: 'Access SOPs for consistent and efficient operational guidelines', icon: 'fas fa-book', link: '/equipment-manuals' },
      { title: 'Training Materials', description: 'Explore resources and courses to enhance your skills and knowledge', icon: 'fas fa-graduation-cap', link: '/compliance-docs' },
      { title: 'Document Repository', description: 'Browse and download all company documents in one centralized location', icon: 'fas fa-folder-open', link: '/document-repository' }
    ],
    eventNews: [
      { day: '25', month: 'OCT', title: 'All-Hands Meeting', description: 'Quarterly company update and Q&A session' },
      { day: '05', month: 'NOV', title: 'Safety Training', description: 'Mandatory safety certification renewal' },
      { day: '18', month: 'NOV', title: 'Team Building Event', description: 'Annual company retreat and activities' },
      { day: '25', month: 'DEC', title: 'Holiday Closure', description: 'Christmas Day - Office closed' }
    ],
    recognition: [
      { title: 'Employee of the Month', name: 'Alex Martinez', description: "Outstanding performance in client relations and project delivery. Alex's dedication has resulted in a 98% client satisfaction rate.", icon: 'fa-trophy' },
      { title: '5 Year Anniversary', name: 'Mia Thompson', description: 'Celebrating five years of exceptional service and leadership in our engineering division. Thank you for your continued dedication!', icon: 'fa-award' },
      { title: 'Happy Birthday', name: 'Sam Johnson', description: 'Wishing our amazing team member a fantastic birthday! Thank you for bringing positivity and innovation to our workplace.', icon: 'fa-birthday-cake' }
    ],
    resources: {
      title: 'Austen Air Conditioning Resources',
      description: 'Access tools and documentation for air conditioning projects.',
      items: [
        { title: 'Project Blueprints', link: '/austen-ac/resources/blueprints' },
        { title: 'Maintenance Guides', link: '/austen-ac/resources/guides' },
        { title: 'Training Modules', link: '/austen-ac/resources/training' }
      ]
    },
    support: {
      title: 'Austen Air Conditioning Support',
      description: 'Get help with air conditioning systems and services.',
      contacts: [
        { name: 'Tech Support', email: 'tech.ac@austen.com', phone: '555-0101' },
        { name: 'Customer Service', email: 'cs.ac@austen.com', phone: '555-0102' }
      ]
    }
  },
  'austen-fs': {
    name: 'Austen Fire and Security',
    logo: LogoFS,
    hero: { title: 'Welcome to Austen Fire and Security', description: 'Austen Fire and Security delivers trusted fire alarm, security, and life safety solutions designed to protect people and property with full code compliance.' },
    announcements: [
      { title: 'Safety Update', description: 'New fire safety protocols implemented' },
      { title: 'Training Session', description: 'Security training scheduled for next week' },
      { title: 'System Upgrade', description: 'Security systems upgrade in progress' },
      { title: 'Compliance Notice', description: 'Ensure compliance with new regulations' },
      { title: 'Team Update', description: 'Welcome new team members' },
      { title: 'Equipment Check', description: 'Mandatory equipment inspection this month' }
    ],
    quickAccess: [
      { title: 'Onboarding Documents', description: 'Access all necessary documents to complete your onboarding process', icon: 'fa-user-plus', link: '/onboarding-documents' },
      { title: 'Offboarding Procedures', description: 'Follow the steps and access resources for a smooth offboarding process', icon: 'fas fa-sign-out-alt', link: '/project-plans' },
      { title: 'PTO Request Forms', description: 'Submit and manage your paid time off requests with ease', icon: 'fas fa-calendar-check', link: '/training-materials' },
      { title: 'Policies', description: 'Explore company policies aligned with our standards and best practices', icon: 'fas fa-file-alt', link: '/safety-guidelines' },
      { title: 'Standard Operating Procedures', description: 'Access SOPs for consistent and efficient operational guidelines', icon: 'fas fa-book', link: '/equipment-manuals' },
      { title: 'Training Materials', description: 'Explore resources and courses to enhance your skills and knowledge', icon: 'fas fa-graduation-cap', link: '/compliance-docs' },
      { title: 'Document Repository', description: 'Browse and download all company documents in one centralized location', icon: 'fas fa-folder-open', link: '/document-repository' }
    ],
    eventNews: [
      { day: '20', month: 'OCT', title: 'Fire Drill', description: 'Annual fire evacuation drill' },
      { day: '10', month: 'NOV', title: 'Security Workshop', description: 'Advanced security training' },
      { day: '15', month: 'DEC', title: 'Team Meeting', description: 'Year-end team review' },
      { day: '24', month: 'DEC', title: 'Office Closure', description: 'Holiday closure' }
    ],
    recognition: [
      { title: 'Top Performer', name: 'Jane Doe', description: 'Exceptional work in system installation', icon: 'fa-trophy' },
      { title: 'Team Leader', name: 'John Smith', description: 'Leadership in safety initiatives', icon: 'fa-award' },
      { title: 'Happy Birthday', name: 'Emily Brown', description: 'Celebrating your special day!', icon: 'fa-birthday-cake' }
    ],
    resources: {
      title: 'Austen Fire and Security Resources',
      description: 'Access tools and documentation for fire and security systems.',
      items: [
        { title: 'Fire Safety Protocols', link: '/austen-fs/resources/protocols' },
        { title: 'Security Training', link: '/austen-fs/resources/training' },
        { title: 'Equipment Manuals', link: '/austen-fs/resources/manuals' }
      ]
    },
    support: {
      title: 'Austen Fire and Security Support',
      description: 'Get help with fire and security systems.',
      contacts: [
        { name: 'Safety Support', email: 'safety.fs@austen.com', phone: '555-0301' },
        { name: 'Technical Support', email: 'tech.fs@austen.com', phone: '555-0302' }
      ]
    }
  },
  'austen-e': {
    name: 'Austen Electric',
    logo: LogoE,
    hero: { title: 'Welcome to Austen Electric', description: 'Austen Electric offers comprehensive electrical contracting services with licensed experts focused on quality, safety, and code-compliant solutions.' },
    announcements: [
      { title: 'Project Update', description: 'New electrical project launched' },
      { title: 'Safety Training', description: 'Electrical safety training scheduled' },
      { title: 'Equipment Update', description: 'New tools available' },
      { title: 'Team News', description: 'Welcome new electricians' },
      { title: 'Compliance Alert', description: 'Electrical code updates' },
      { title: 'Maintenance Notice', description: 'Scheduled maintenance next week' }
    ],
    quickAccess: [
      { title: 'Onboarding Documents', description: 'Access all necessary documents to complete your onboarding process', icon: 'fa-user-plus', link: '/onboarding-documents' },
      { title: 'Offboarding Procedures', description: 'Follow the steps and access resources for a smooth offboarding process', icon: 'fas fa-sign-out-alt', link: '/project-plans' },
      { title: 'PTO Request Forms', description: 'Submit and manage your paid time off requests with ease', icon: 'fas fa-calendar-check', link: '/training-materials' },
      { title: 'Policies', description: 'Explore company policies aligned with our standards and best practices', icon: 'fas fa-file-alt', link: '/safety-guidelines' },
      { title: 'Standard Operating Procedures', description: 'Access SOPs for consistent and efficient operational guidelines', icon: 'fas fa-book', link: '/equipment-manuals' },
      { title: 'Training Materials', description: 'Explore resources and courses to enhance your skills and knowledge', icon: 'fas fa-graduation-cap', link: '/compliance-docs' },
      { title: 'Document Repository', description: 'Browse and download all company documents in one centralized location', icon: 'fas fa-folder-open', link: '/document-repository' }
    ],
    eventNews: [
      { day: '22', month: 'OCT', title: 'Project Kickoff', description: 'New project launch meeting' },
      { day: '08', month: 'NOV', title: 'Safety Training', description: 'Electrical safety certification' },
      { day: '20', month: 'DEC', title: 'Team Meeting', description: 'Year-end review' },
      { day: '24', month: 'DEC', title: 'Office Closure', description: 'Holiday closure' }
    ],
    recognition: [
      { title: 'Top Electrician', name: 'Mike Wilson', description: 'Outstanding project delivery', icon: 'fa-trophy' },
      { title: '10 Year Anniversary', name: 'Sarah Lee', description: 'A decade of excellence', icon: 'fa-award' },
      { title: 'Happy Birthday', name: 'Tom Clark', description: 'Celebrating your special day!', icon: 'fa-birthday-cake' }
    ],
    resources: {
      title: 'Austen Electric Resources',
      description: 'Access tools and documentation for electrical projects.',
      items: [
        { title: 'Wiring Diagrams', link: '/austen-e/resources/diagrams' },
        { title: 'Safety Protocols', link: '/austen-e/resources/protocols' },
        { title: 'Training Courses', link: '/austen-e/resources/training' }
      ]
    },
    support: {
      title: 'Austen Electric Support',
      description: 'Get help with electrical systems and projects.',
      contacts: [
        { name: 'Technical Support', email: 'tech.e@austen.com', phone: '555-0401' },
        { name: 'Project Support', email: 'project.e@austen.com', phone: '555-0402' }
      ]
    }
  },
  'austen-b': {
    name: 'Austen Builders',
    logo: LogoB,
    hero: { title: 'Welcome to Austen Builders', description: 'Austen Builders oversees construction projects from start to finish, ensuring quality execution, cost efficiency, and lasting client relationships.' },
    announcements: [
      { title: 'Construction Update', description: 'New project milestone reached' },
      { title: 'Safety Training', description: 'Construction safety training scheduled' },
      { title: 'Equipment Update', description: 'New tools available' },
      { title: 'Team News', description: 'Welcome new builders' },
      { title: 'Compliance Alert', description: 'Construction code updates' },
      { title: 'Maintenance Notice', description: 'Scheduled maintenance next week' }
    ],
    quickAccess: [
      { title: 'Onboarding Documents', description: 'Access all necessary documents to complete your onboarding process', icon: 'fa-user-plus', link: '/onboarding-documents' },
      { title: 'Offboarding Procedures', description: 'Follow the steps and access resources for a smooth offboarding process', icon: 'fas fa-sign-out-alt', link: '/project-plans' },
      { title: 'PTO Request Forms', description: 'Submit and manage your paid time off requests with ease', icon: 'fas fa-calendar-check', link: '/training-materials' },
      { title: 'Policies', description: 'Explore company policies aligned with our standards and best practices', icon: 'fas fa-file-alt', link: '/safety-guidelines' },
      { title: 'Standard Operating Procedures', description: 'Access SOPs for consistent and efficient operational guidelines', icon: 'fas fa-book', link: '/equipment-manuals' },
      { title: 'Training Materials', description: 'Explore resources and courses to enhance your skills and knowledge', icon: 'fas fa-graduation-cap', link: '/compliance-docs' },
      { title: 'Document Repository', description: 'Browse and download all company documents in one centralized location', icon: 'fas fa-folder-open', link: '/document-repository' }
    ],
    eventNews: [
      { day: '23', month: 'OCT', title: 'Site Inspection', description: 'Annual site safety check' },
      { day: '09', month: 'NOV', title: 'Safety Training', description: 'Construction safety certification' },
      { day: '21', month: 'DEC', title: 'Team Meeting', description: 'Year-end review' },
      { day: '24', month: 'DEC', title: 'Office Closure', description: 'Holiday closure' }
    ],
    recognition: [
      { title: 'Top Builder', name: 'Chris Evans', description: 'Outstanding project delivery', icon: 'fa-trophy' },
      { title: '5 Year Anniversary', name: 'Lisa Wong', description: 'Five years of excellence', icon: 'fa-award' },
      { title: 'Happy Birthday', name: 'David Kim', description: 'Celebrating your special day!', icon: 'fa-birthday-cake' }
    ],
    resources: {
      title: 'Austen Builders Resources',
      description: 'Access tools and documentation for construction projects.',
      items: [
        { title: 'Construction Plans', link: '/austen-b/resources/plans' },
        { title: 'Safety Manuals', link: '/austen-b/resources/manuals' },
        { title: 'Equipment Guides', link: '/austen-b/resources/equipment' }
      ]
    },
    support: {
      title: 'Austen Builders Support',
      description: 'Get help with construction projects and services.',
      contacts: [
        { name: 'Project Support', email: 'project.b@austen.com', phone: '555-0201' },
        { name: 'Safety Team', email: 'safety.b@austen.com', phone: '555-0202' }
      ]
    }
  },
  'austen-g': {
    name: 'Austen Generators',
    logo: LogoG,
    hero: { title: 'Welcome to Austen Generators', description: 'Austen Generators delivers reliable backup power solutions and manages fleet operations across Austen Enterprises to ensure uninterrupted performance and efficiency.' },
    announcements: [
      { title: 'Project Update', description: 'New generator project launched' },
      { title: 'Safety Training', description: 'Generator safety training scheduled' },
      { title: 'Equipment Update', description: 'New generators available' },
      { title: 'Team News', description: 'Welcome new technicians' },
      { title: 'Compliance Alert', description: 'Generator code updates' },
      { title: 'Maintenance Notice', description: 'Scheduled maintenance next week' }
    ],
   quickAccess: [
      { title: 'Onboarding Documents', description: 'Access all necessary documents to complete your onboarding process', icon: 'fa-user-plus', link: '/onboarding-documents' },
      { title: 'Offboarding Procedures', description: 'Follow the steps and access resources for a smooth offboarding process', icon: 'fas fa-sign-out-alt', link: '/project-plans' },
      { title: 'PTO Request Forms', description: 'Submit and manage your paid time off requests with ease', icon: 'fas fa-calendar-check', link: '/training-materials' },
      { title: 'Policies', description: 'Explore company policies aligned with our standards and best practices', icon: 'fas fa-file-alt', link: '/safety-guidelines' },
      { title: 'Standard Operating Procedures', description: 'Access SOPs for consistent and efficient operational guidelines', icon: 'fas fa-book', link: '/equipment-manuals' },
      { title: 'Training Materials', description: 'Explore resources and courses to enhance your skills and knowledge', icon: 'fas fa-graduation-cap', link: '/compliance-docs' },
      { title: 'Document Repository', description: 'Browse and download all company documents in one centralized location', icon: 'fas fa-folder-open', link: '/document-repository' }
    ],
    eventNews: [
      { day: '24', month: 'OCT', title: 'Project Kickoff', description: 'New generator project launch' },
      { day: '07', month: 'NOV', title: 'Safety Training', description: 'Generator safety certification' },
      { day: '19', month: 'DEC', title: 'Team Meeting', description: 'Year-end review' },
      { day: '24', month: 'DEC', title: 'Office Closure', description: 'Holiday closure' }
    ],
    recognition: [
      { title: 'Top Technician', name: 'Anna Taylor', description: 'Outstanding project delivery', icon: 'fa-trophy' },
      { title: '10 Year Anniversary', name: 'Mark Lee', description: 'A decade of excellence', icon: 'fa-award' },
      { title: 'Happy Birthday', name: 'Emma Davis', description: 'Celebrating your special day!', icon: 'fa-birthday-cake' }
    ],
    resources: {
      title: 'Austen Generators Resources',
      description: 'Access tools and documentation for generator projects.',
      items: [
        { title: 'Generator Specs', link: '/austen-g/resources/specs' },
        { title: 'Maintenance Guides', link: '/austen-g/resources/guides' },
        { title: 'Training Modules', link: '/austen-g/resources/training' }
      ]
    },
    support: {
      title: 'Austen Generators Support',
      description: 'Get help with generator systems and services.',
      contacts: [
        { name: 'Technical Support', email: 'tech.g@austen.com', phone: '555-0501' },
        { name: 'Service Team', email: 'service.g@austen.com', phone: '555-0502' }
      ]
    }
  },
  'austen-is': {
    name: 'Austen Integrated Systems',
    logo: LogoIS,
    hero: { title: 'Welcome to Austen Integrated Systems', description: 'Austen Integrated Systems provides strategic consulting and tech solutions to enhance efficiency, security, and performance, empowering organizations to achieve sustainable growth.' },
    announcements: [
      { title: 'System Update', description: 'New integration project launched' },
      { title: 'Training Session', description: 'Systems training scheduled' },
      { title: 'Equipment Update', description: 'New tools available' },
      { title: 'Team News', description: 'Welcome new engineers' },
      { title: 'Compliance Alert', description: 'System code updates' },
      { title: 'Maintenance Notice', description: 'Scheduled maintenance next week' }
    ],
     quickAccess: [
      { title: 'Onboarding Documents', description: 'Access all necessary documents to complete your onboarding process', icon: 'fa-user-plus', link: '/onboarding-documents' },
      { title: 'Offboarding Procedures', description: 'Follow the steps and access resources for a smooth offboarding process', icon: 'fas fa-sign-out-alt', link: '/project-plans' },
      { title: 'PTO Request Forms', description: 'Submit and manage your paid time off requests with ease', icon: 'fas fa-calendar-check', link: '/training-materials' },
      { title: 'Policies', description: 'Explore company policies aligned with our standards and best practices', icon: 'fas fa-file-alt', link: '/safety-guidelines' },
      { title: 'Standard Operating Procedures', description: 'Access SOPs for consistent and efficient operational guidelines', icon: 'fas fa-book', link: '/equipment-manuals' },
      { title: 'Training Materials', description: 'Explore resources and courses to enhance your skills and knowledge', icon: 'fas fa-graduation-cap', link: '/compliance-docs' },
      { title: 'Document Repository', description: 'Browse and download all company documents in one centralized location', icon: 'fas fa-folder-open', link: '/document-repository' }
    ],
    eventNews: [
      { day: '21', month: 'OCT', title: 'System Demo', description: 'New system demonstration' },
      { day: '06', month: 'NOV', title: 'Training Session', description: 'Integration training' },
      { day: '18', month: 'DEC', title: 'Team Meeting', description: 'Year-end review' },
      { day: '24', month: 'DEC', title: 'Office Closure', description: 'Holiday closure' }
    ],
    recognition: [
      { title: 'Top Engineer', name: 'James Brown', description: 'Outstanding system integration', icon: 'fa-trophy' },
      { title: '5 Year Anniversary', name: 'Laura White', description: 'Five years of excellence', icon: 'fa-award' },
      { title: 'Happy Birthday', name: 'Ryan Green', description: 'Celebrating your special day!', icon: 'fa-birthday-cake' }
    ],
    resources: {
      title: 'Austen Integrated Systems Resources',
      description: 'Access tools and documentation for system integration.',
      items: [
        { title: 'System Blueprints', link: '/austen-is/resources/blueprints' },
        { title: 'Integration Guides', link: '/austen-is/resources/guides' },
        { title: 'Training Modules', link: '/austen-is/resources/training' }
      ]
    },
    support: {
      title: 'Austen Integrated Systems Support',
      description: 'Get help with system integration and services.',
      contacts: [
        { name: 'Technical Support', email: 'tech.is@austen.com', phone: '555-0601' },
        { name: 'Engineering Support', email: 'eng.is@austen.com', phone: '555-0602' }
      ]
    }
  },
  'austen-p': {
    name: 'Austen Plumbing',
    logo: LogoP,
    hero: { title: 'Welcome to Austen Plubming', description: 'Austen Plumbing delivers reliable plumbing services with certified experts, quality workmanship, and lasting solutions.' },
    announcements: [
      { title: 'Project Update', description: 'New plumbing project launched' },
      { title: 'Safety Training', description: 'Plumbing safety training scheduled' },
      { title: 'Equipment Update', description: 'New tools available' },
      { title: 'Team News', description: 'Welcome new plumbers' },
      { title: 'Compliance Alert', description: 'Plumbing code updates' },
      { title: 'Maintenance Notice', description: 'Scheduled maintenance next week' }
    ],
    quickAccess: [
      { title: 'Onboarding Documents', description: 'Access all necessary documents to complete your onboarding process', icon: 'fa-user-plus', link: '/onboarding-documents' },
      { title: 'Offboarding Procedures', description: 'Follow the steps and access resources for a smooth offboarding process', icon: 'fas fa-sign-out-alt', link: '/project-plans' },
      { title: 'PTO Request Forms', description: 'Submit and manage your paid time off requests with ease', icon: 'fas fa-calendar-check', link: '/training-materials' },
      { title: 'Policies', description: 'Explore company policies aligned with our standards and best practices', icon: 'fas fa-file-alt', link: '/safety-guidelines' },
      { title: 'Standard Operating Procedures', description: 'Access SOPs for consistent and efficient operational guidelines', icon: 'fas fa-book', link: '/equipment-manuals' },
      { title: 'Training Materials', description: 'Explore resources and courses to enhance your skills and knowledge', icon: 'fas fa-graduation-cap', link: '/compliance-docs' },
      { title: 'Document Repository', description: 'Browse and download all company documents in one centralized location', icon: 'fas fa-folder-open', link: '/document-repository' }
    ],
    eventNews: [
      { day: '26', month: 'OCT', title: 'Project Kickoff', description: 'New plumbing project launch' },
      { day: '11', month: 'NOV', title: 'Safety Training', description: 'Plumbing safety certification' },
      { day: '22', month: 'DEC', title: 'Team Meeting', description: 'Year-end review' },
      { day: '24', month: 'DEC', title: 'Office Closure', description: 'Holiday closure' }
    ],
    recognition: [
      { title: 'Top Plumber', name: 'Sophie Adams', description: 'Outstanding project delivery', icon: 'fa-trophy' },
      { title: '10 Year Anniversary', name: 'Daniel Kim', description: 'A decade of excellence', icon: 'fa-award' },
      { title: 'Happy Birthday', name: 'Olivia Brown', description: 'Celebrating your special day!', icon: 'fa-birthday-cake' }
    ],
    resources: {
      title: 'Austen Plumbing Resources',
      description: 'Access tools and documentation for plumbing projects.',
      items: [
        { title: 'Piping Schematics', link: '/austen-p/resources/schematics' },
        { title: 'Installation Guides', link: '/austen-p/resources/guides' },
        { title: 'Training Modules', link: '/austen-p/resources/training' }
      ]
    },
    support: {
      title: 'Austen Plumbing Support',
      description: 'Get help with plumbing systems and services.',
      contacts: [
        { name: 'Technical Support', email: 'tech.p@austen.com', phone: '555-0701' },
        { name: 'Service Team', email: 'service.p@austen.com', phone: '555-0702' }
      ]
    }
  },
  'austen-main': {
    name: 'Austen Enterprises',
    logo: LogoEnterprises,
    hero: { title: 'Welcome to Austen Enterprises', description: 'Austen Enterprises provides strategic leadership and support to diverse trade and tech subsidiaries, driving excellence through innovation and integrated management.' },
    announcements: [
      { title: 'Company News', description: 'Latest updates from Austen Enterprises' },
      { title: 'Leadership Message', description: 'A message from our CEO' },
      { title: 'Event Announcement', description: 'Upcoming company-wide event' },
      { title: 'Policy Change', description: 'New corporate policy effective next month' },
      { title: 'IT Alert', description: 'System maintenance scheduled for this weekend' },
      { title: 'Training Deadline', description: 'Complete corporate training by Nov 5' }
    ],
    quickAccess: [
      { title: 'Submit PTO', description: 'Request time off and manage your vacation schedule with our streamlined system', icon: 'fas fa-calendar-check', link: '/onboarding-documents' },
      { title: 'Onboarding', description: 'Complete your onboarding process and access new employee resources', icon: 'fas fa-user-plus', link: '/corporate-policies' },
      { title: 'IT Helpdesk', description: 'Get technical support and submit IT tickets for quick resolution', icon: 'fas fa-headset', link: '/training-materials' },
      { title: 'Policies', description: 'Browse company policies, procedures, and compliance documents', icon: 'fas fa-file-alt', link: '/financial-reports' },
      { title: 'Time Tracking', description: 'Log your hours and track project time with our integrated system', icon: 'fas fa-clock', link: '/compliance-docs' },
     
    ],
    eventNews: [
      { day: '25', month: 'OCT', title: 'All-Hands Meeting', description: 'Quarterly corporate update' },
      { day: '05', month: 'NOV', title: 'Corporate Training', description: 'Mandatory training session' },
      { day: '18', month: 'NOV', title: 'Corporate Retreat', description: 'Annual company retreat' },
      { day: '24', month: 'DEC', title: 'Office Closure', description: 'Holiday closure' }
    ],
    recognition: [
      { title: 'Employee of the Year', name: 'Michael Chen', description: 'Outstanding corporate leadership', icon: 'fa-trophy' },
      { title: '20 Year Anniversary', name: 'Susan Lee', description: 'Two decades of excellence', icon: 'fa-award' },
      { title: 'Happy Birthday', name: 'Robert Taylor', description: 'Celebrating your special day!', icon: 'fa-birthday-cake' }
    ],
    resources: {
      title: 'Austen Enterprises Resources',
      description: 'Access corporate-wide resources and tools.',
      items: [
        { title: 'Employee Handbook', link: '/resources/handbook' },
        { title: 'Corporate Policies', link: 'resources/policies' },
        { title: 'Training Portal', link: '/resources/training' }
      ]
    },
    support: {
      title: 'Austen Enterprises Support',
      description: 'Get corporate support and assistance.',
      contacts: [
        { name: 'HR Support', email: 'hr@austen.com', phone: '555-0001' },
        { name: 'IT Helpdesk', email: 'it@austen.com', phone: '555-0002' }
      ]
    }
  }
};