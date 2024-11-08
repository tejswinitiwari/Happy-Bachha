const db = require('../models');
const Users = db.users;

const Activities = db.activities;

const Contacts = db.contacts;

const Leads = db.leads;

const Metrics = db.metrics;

const Notes = db.notes;

const Organizations = db.organizations;

const ActivitiesData = [
  {
    description: 'Meeting with Acme Corporation',

    start_time: new Date('2023-10-01T09:00:00'),

    end_time: new Date('2023-10-01T10:00:00'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    description: 'Call with Smith & Co',

    start_time: new Date('2023-10-02T11:00:00'),

    end_time: new Date('2023-10-02T11:30:00'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    description: 'Presentation for Green Energy Ltd',

    start_time: new Date('2023-10-03T14:00:00'),

    end_time: new Date('2023-10-03T15:00:00'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    description: 'Review meeting with Tech Innovators',

    start_time: new Date('2023-10-04T16:00:00'),

    end_time: new Date('2023-10-04T17:00:00'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    description: 'Contract signing with Future Solutions',

    start_time: new Date('2023-10-05T10:00:00'),

    end_time: new Date('2023-10-05T11:00:00'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const ContactsData = [
  {
    first_name: 'Alice',

    last_name: 'Johnson',

    email: 'alice.johnson@acme.com',

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    first_name: 'Bob',

    last_name: 'Smith',

    email: 'bob.smith@smithco.com',

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    first_name: 'Charlie',

    last_name: 'Brown',

    email: 'charlie.brown@greenenergy.com',

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    first_name: 'Diana',

    last_name: 'Prince',

    email: 'diana.prince@techinnovators.com',

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    first_name: 'Eve',

    last_name: 'Adams',

    email: 'eve.adams@futuresolutions.com',

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },
];

const LeadsData = [
  {
    name: 'Acme Corporation',

    status: 'Qualified',

    category: 'Government',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'Smith & Co',

    status: 'New',

    category: 'Corporate',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'Green Energy Ltd',

    status: 'New',

    category: 'Individual',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'Tech Innovators',

    status: 'Contacted',

    category: 'Corporate',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'Future Solutions',

    status: 'New',

    category: 'Government',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const MetricsData = [
  {
    name: 'Conversion Rate',

    value: 0.25,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'Customer Satisfaction',

    value: 0.85,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'Lead Response Time',

    value: 1.5,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'Deal Size',

    value: 50000,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'Retention Rate',

    value: 0.9,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const NotesData = [
  {
    content: 'Initial meeting with Acme Corporation went well.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    content: 'Follow-up call scheduled with Smith & Co.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    content: 'Green Energy Ltd interested in renewable solutions.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    content: 'Tech Innovators decided to go with a competitor.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    content: 'Future Solutions signed the contract.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const OrganizationsData = [
  {
    name: 'Linus Pauling',
  },

  {
    name: 'William Herschel',
  },

  {
    name: 'Ludwig Boltzmann',
  },

  {
    name: 'J. Robert Oppenheimer',
  },

  {
    name: 'Trofim Lysenko',
  },
];

// Similar logic for "relation_many"

async function associateUserWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User0 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (User0?.setOrganization) {
    await User0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User1 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (User1?.setOrganization) {
    await User1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User2 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (User2?.setOrganization) {
    await User2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User3 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (User3?.setOrganization) {
    await User3.setOrganization(relatedOrganization3);
  }

  const relatedOrganization4 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User4 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (User4?.setOrganization) {
    await User4.setOrganization(relatedOrganization4);
  }
}

async function associateActivityWithLead() {
  const relatedLead0 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Activity0 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Activity0?.setLead) {
    await Activity0.setLead(relatedLead0);
  }

  const relatedLead1 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Activity1 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Activity1?.setLead) {
    await Activity1.setLead(relatedLead1);
  }

  const relatedLead2 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Activity2 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Activity2?.setLead) {
    await Activity2.setLead(relatedLead2);
  }

  const relatedLead3 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Activity3 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Activity3?.setLead) {
    await Activity3.setLead(relatedLead3);
  }

  const relatedLead4 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Activity4 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Activity4?.setLead) {
    await Activity4.setLead(relatedLead4);
  }
}

async function associateActivityWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Activity0 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Activity0?.setOrganization) {
    await Activity0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Activity1 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Activity1?.setOrganization) {
    await Activity1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Activity2 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Activity2?.setOrganization) {
    await Activity2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Activity3 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Activity3?.setOrganization) {
    await Activity3.setOrganization(relatedOrganization3);
  }

  const relatedOrganization4 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Activity4 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Activity4?.setOrganization) {
    await Activity4.setOrganization(relatedOrganization4);
  }
}

// Similar logic for "relation_many"

async function associateContactWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Contact0 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Contact0?.setOrganization) {
    await Contact0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Contact1 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Contact1?.setOrganization) {
    await Contact1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Contact2 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Contact2?.setOrganization) {
    await Contact2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Contact3 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Contact3?.setOrganization) {
    await Contact3.setOrganization(relatedOrganization3);
  }

  const relatedOrganization4 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Contact4 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Contact4?.setOrganization) {
    await Contact4.setOrganization(relatedOrganization4);
  }
}

async function associateLeadWithOwner() {
  const relatedOwner0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Lead0 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Lead0?.setOwner) {
    await Lead0.setOwner(relatedOwner0);
  }

  const relatedOwner1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Lead1 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Lead1?.setOwner) {
    await Lead1.setOwner(relatedOwner1);
  }

  const relatedOwner2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Lead2 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Lead2?.setOwner) {
    await Lead2.setOwner(relatedOwner2);
  }

  const relatedOwner3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Lead3 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Lead3?.setOwner) {
    await Lead3.setOwner(relatedOwner3);
  }

  const relatedOwner4 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Lead4 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Lead4?.setOwner) {
    await Lead4.setOwner(relatedOwner4);
  }
}

async function associateLeadWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Lead0 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Lead0?.setOrganization) {
    await Lead0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Lead1 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Lead1?.setOrganization) {
    await Lead1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Lead2 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Lead2?.setOrganization) {
    await Lead2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Lead3 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Lead3?.setOrganization) {
    await Lead3.setOrganization(relatedOrganization3);
  }

  const relatedOrganization4 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Lead4 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Lead4?.setOrganization) {
    await Lead4.setOrganization(relatedOrganization4);
  }
}

async function associateMetricWithLead() {
  const relatedLead0 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Metric0 = await Metrics.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Metric0?.setLead) {
    await Metric0.setLead(relatedLead0);
  }

  const relatedLead1 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Metric1 = await Metrics.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Metric1?.setLead) {
    await Metric1.setLead(relatedLead1);
  }

  const relatedLead2 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Metric2 = await Metrics.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Metric2?.setLead) {
    await Metric2.setLead(relatedLead2);
  }

  const relatedLead3 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Metric3 = await Metrics.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Metric3?.setLead) {
    await Metric3.setLead(relatedLead3);
  }

  const relatedLead4 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Metric4 = await Metrics.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Metric4?.setLead) {
    await Metric4.setLead(relatedLead4);
  }
}

async function associateMetricWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Metric0 = await Metrics.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Metric0?.setOrganization) {
    await Metric0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Metric1 = await Metrics.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Metric1?.setOrganization) {
    await Metric1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Metric2 = await Metrics.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Metric2?.setOrganization) {
    await Metric2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Metric3 = await Metrics.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Metric3?.setOrganization) {
    await Metric3.setOrganization(relatedOrganization3);
  }

  const relatedOrganization4 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Metric4 = await Metrics.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Metric4?.setOrganization) {
    await Metric4.setOrganization(relatedOrganization4);
  }
}

async function associateNoteWithLead() {
  const relatedLead0 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Note0 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Note0?.setLead) {
    await Note0.setLead(relatedLead0);
  }

  const relatedLead1 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Note1 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Note1?.setLead) {
    await Note1.setLead(relatedLead1);
  }

  const relatedLead2 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Note2 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Note2?.setLead) {
    await Note2.setLead(relatedLead2);
  }

  const relatedLead3 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Note3 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Note3?.setLead) {
    await Note3.setLead(relatedLead3);
  }

  const relatedLead4 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Note4 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Note4?.setLead) {
    await Note4.setLead(relatedLead4);
  }
}

async function associateNoteWithAuthor() {
  const relatedAuthor0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Note0 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Note0?.setAuthor) {
    await Note0.setAuthor(relatedAuthor0);
  }

  const relatedAuthor1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Note1 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Note1?.setAuthor) {
    await Note1.setAuthor(relatedAuthor1);
  }

  const relatedAuthor2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Note2 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Note2?.setAuthor) {
    await Note2.setAuthor(relatedAuthor2);
  }

  const relatedAuthor3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Note3 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Note3?.setAuthor) {
    await Note3.setAuthor(relatedAuthor3);
  }

  const relatedAuthor4 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Note4 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Note4?.setAuthor) {
    await Note4.setAuthor(relatedAuthor4);
  }
}

async function associateNoteWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Note0 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Note0?.setOrganization) {
    await Note0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Note1 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Note1?.setOrganization) {
    await Note1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Note2 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Note2?.setOrganization) {
    await Note2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Note3 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Note3?.setOrganization) {
    await Note3.setOrganization(relatedOrganization3);
  }

  const relatedOrganization4 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Note4 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Note4?.setOrganization) {
    await Note4.setOrganization(relatedOrganization4);
  }
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Activities.bulkCreate(ActivitiesData);

    await Contacts.bulkCreate(ContactsData);

    await Leads.bulkCreate(LeadsData);

    await Metrics.bulkCreate(MetricsData);

    await Notes.bulkCreate(NotesData);

    await Organizations.bulkCreate(OrganizationsData);

    await Promise.all([
      // Similar logic for "relation_many"

      await associateUserWithOrganization(),

      await associateActivityWithLead(),

      await associateActivityWithOrganization(),

      // Similar logic for "relation_many"

      await associateContactWithOrganization(),

      await associateLeadWithOwner(),

      await associateLeadWithOrganization(),

      await associateMetricWithLead(),

      await associateMetricWithOrganization(),

      await associateNoteWithLead(),

      await associateNoteWithAuthor(),

      await associateNoteWithOrganization(),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('activities', null, {});

    await queryInterface.bulkDelete('contacts', null, {});

    await queryInterface.bulkDelete('leads', null, {});

    await queryInterface.bulkDelete('metrics', null, {});

    await queryInterface.bulkDelete('notes', null, {});

    await queryInterface.bulkDelete('organizations', null, {});
  },
};
