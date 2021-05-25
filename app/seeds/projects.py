from ..models import db, Project

def seed_projects():
  testProject = Project(
    user_id=1,
    category_id=1,
    state_id=49,
    title="Test Project",
    description="Blah Blah Blah school of the Blind",
    goal=50000,
    amount_raised=0,
    status="Not completed",
    address_1="123 Sesame Street",
    city="Florence",
    state="Alabama",
    zipcode=123456
  )
  Project1 = Project(
    user_id=2,
    category_id=1,
    state_id=33,
    title="Racquetball team",
    description= "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    goal=15000,
    amount_raised=7000,
    address_1="123 Timbuktu Road",
    city="Boone",
    state="North Carolina",
    zipcode=44455
  )
  Project2 = Project(
    user_id=3,
    category_id=1,
    state_id=33,
    title="School for the one limbed",
    description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    goal=500000,
    amount_raised=100,
    address_1="3050 Smithington Court",
    city="Boone",
    state="North Carolina",
    zipcode=44455
  )
  Project3 = Project(
    user_id=3,
    category_id=1,
    state_id=33,
    title="School for the one limbed",
    description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    goal=500000,
    amount_raised=100,
    address_1="3050 Smithington Court",
    city="Boone",
    state="North Carolina",
    zipcode=44455
  )
  Project4 = Project(
    user_id=4,
    category_id=1,
    state_id=3,
    title="School for the one limbed",
    description= "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
    goal=500000,
    amount_raised=100,
    address_1="200 Allen Drive",
    city="Jonesboro",
    state="Arkansas",
    zipcode=44455
  )
  Project5 = Project(
    user_id=5,
    category_id=1,
    state_id=38,
    title="School for the one limbed",
    description= "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque venenatis nisl a sapien placerat, ut interdum metus ornare. Donec pellentesque nunc hendrerit aliquet placerat. Donec facilisis id massa in pharetra. Aliquam auctor sit amet orci non posuere.",
    goal=1000000,
    amount_raised=50000,
    address_1="7 Avenue Way",
    city="Pittsburgh",
    state="Pennsylvania",
    zipcode=44455
  )
  Project6 = Project(
    user_id=6,
    category_id=1,
    state_id=31,
    title="New Pencil for people with dyslexia",
    description= "Aliquam at viverra ligula. Ut nibh diam, dignissim vel augue eget, sollicitudin molestie diam. Nulla scelerisque mi aliquam sagittis sodales. Integer eu accumsan risus. Aliquam vitae viverra nibh. Donec vel nulla facilisis, molestie mi vitae, tincidunt nisl. Aliquam leo ante, dapibus tincidunt nisi non, lobortis scelerisque mauris.",
    goal=70000,
    amount_raised=50000,
    address_1="2576 Chad Drive",
    city="Dune City",
    state="New Mexico",
    zipcode=55455
  )
  Project7 = Project(
    user_id=7,
    category_id=1,
    state_id=32,
    title="Support group for victims of Superhero Violence",
    description= "Praesent et erat sed elit cursus tristique at fermentum est. Cras commodo metus sit amet augue aliquam, quis commodo arcu sagittis. Fusce sed tortor dolor. Donec sodales tincidunt felis ut pellentesque. Donec non mi fringilla, porta felis ac, iaculis felis. Proin commodo eu odio fringilla auctor. Aliquam eget auctor augue. Donec et quam lorem.",
    goal=8000,
    amount_raised=15,
    address_1="687 Main Street",
    city="New York City",
    state="New York",
    zipcode=55566
  )
  Project8 = Project(
    user_id=8,
    category_id=1,
    state_id=28,
    title="Halfway House for people addicted to eating paint",
    description= " Proin eu metus eget purus egestas volutpat a iaculis risus. Praesent et dolor vel justo sodales porta. Donec eu ipsum congue, semper enim eu, luctus leo. Ut eu augue non turpis condimentum laoreet sed in mauris. Cras vehicula purus vitae odio semper, et porta sapien gravida",
    goal=100000,
    amount_raised=500,
    address_1="189 Mysteria Court",
    city="Las Vegas",
    state="Nevada",
    zipcode=55567
  )
  Project9 = Project(
    user_id=9,
    category_id=2,
    state_id=47,
    title="New handball court ",
    description= " Vivamus dignissim ultrices iaculis. Morbi maximus urna at aliquam porttitor. Vivamus interdum ornare lorem, sollicitudin porta tortor venenatis posuere. Suspendisse non leo volutpat, cursus sem vitae, venenatis sapien. Curabitur nec lacus consectetur libero iaculis convallis ac id lorem. Integer vel bibendum enim, at accumsan diam",
    goal=65000,
    amount_raised=64000,
    address_1="111 Untold Street",
    city="Seattle",
    state="Washington",
    zipcode=68423
  )
  Project10 = Project(
    user_id=10,
    category_id=2,
    state_id=46,
    title="New jumpropes for the school of the blind ",
    description= "Fusce dapibus, elit eu interdum pellentesque, orci dui finibus mi, non tempus nunc est eget magna. Nullam hendrerit ex at metus posuere laoreet. Quisque ultricies, ante non pulvinar porttitor, lacus felis convallis est, eget sollicitudin nisi velit eleifend lacus. Cras ligula lacus, auctor nec odio vel, semper facilisis lacus. Vivamus dolor sem, eleifend at tincidunt et, faucibus a purus.",
    goal=240000,
    amount_raised=190000,
    address_1="126 Killer Street",
    city="Richmond",
    state="Virginia",
    zipcode=11573
  )
  Project11 = Project(
    user_id=11,
    category_id=1,
    state_id=41,
    title="Anger Management classes",
    description= "Cras at posuere enim. Pellentesque mollis et arcu vitae ornare. Morbi hendrerit, velit in rutrum congue, tortor risus vestibulum nibh, eu elementum nibh sapien a arcu. Nam pretium mi in mattis interdum. Proin elementum, nulla ac faucibus consequat, arcu est rhoncus magna, nec pellentesque ipsum risus laoreet nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam blandit at lectus vel volutpat.",
    goal=50000,
    amount_raised=15000,
    address_1="126 Uptown Avenue",
    city="Union",
    state="South Dakota",
    zipcode=55566
  )

  db.session.add(testProject)
  db.session.add(Project1)
  db.session.add(Project2)
  db.session.add(Project3)
  db.session.add(Project4)
  db.session.add(Project5)
  db.session.add(Project6)
  db.session.add(Project7)
  db.session.add(Project8)
  db.session.add(Project9)
  db.session.add(Project10)
  db.session.add(Project11)
  db.session.commit()

def undo_projects():
    db.session.execute('TRUNCATE projects RESTART IDENTITY CASCADE;')
    db.session.commit()
