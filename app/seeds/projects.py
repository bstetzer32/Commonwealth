from ..models import db, Project


def seed_projects():
    testProject = Project(
        user_id=1,
        category_id=1,
        state_id=49,
        city_id=46,
        image_url='https://commonwealthprojectpictures.s3.ca-central-1.amazonaws.com/Schoolfortheblind.jpg',
        title="Brand new school for the blind",
        tagline="Help the blind have better life",
        description="'Donec sit amet efficitur lacus. In vitae facilisis erat, quis blandit leo. Curabitur quis massa bibendum, lacinia nibh ac, pulvinar nisl. Pellentesque rutrum posuere risus vel dapibus. Cras volutpat mauris ac risus auctor aliquet. Donec ultrices sapien nisl, quis pharetra augue ullamcorper quis. Morbi rutrum facilisis turpis sed viverra.'",
        goal=50000,
        amount_raised=6700,
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
        city_id=18,
        image_url='https://commonwealthprojectpictures.s3.ca-central-1.amazonaws.com/raquetball.jpg',
        title="Racquetball team",
        tagline="Come help these kids hit some balls!",
        description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
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
        city_id=18,
        image_url='https://commonwealthprojectpictures.s3.ca-central-1.amazonaws.com/schoolforonelimbed.jpg',
        title="School for the one limbed",
        tagline='Disability is a matter of perception.',
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        goal=90000,
        amount_raised=11000,
        address_1="3050 Smithington Court",
        city="Boone",
        state="North Carolina",
        zipcode=44455
    )
    Project3 = Project(
        user_id=3,
        category_id=1,
        state_id=33,
        city_id=18,
        tagline='Help these girls be the next Madame Curie',
        image_url='https://commonwealthprojectpictures.s3.ca-central-1.amazonaws.com/Her+science+lab.png',
        title="Her Science Lab",
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        goal=20000,
        amount_raised=350,
        address_1="3050 Smithington Court",
        city="Boone",
        state="North Carolina",
        zipcode=44455
    )
    Project4 = Project(
        user_id=4,
        category_id=1,
        state_id=3,
        city_id=20,
        image_url='https://commonwealthprojectpictures.s3.ca-central-1.amazonaws.com/The+Spoon+Stewards.jpg',
        title="The Spoon Stewards",
        tagline='Serve your comunity',
        description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
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
        city_id=19,
        image_url='https://commonwealthprojectpictures.s3.ca-central-1.amazonaws.com/backpack_heros.jpg',
        title="Backpack heroes",
        tagline='Grab a backpack and come out!',
        description="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque venenatis nisl a sapien placerat, ut interdum metus ornare. Donec pellentesque nunc hendrerit aliquet placerat. Donec facilisis id massa in pharetra. Aliquam auctor sit amet orci non posuere.",
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
        city_id=26,
        image_url='https://commonwealthprojectpictures.s3.ca-central-1.amazonaws.com/new+pencil.jpg',
        title="New Pencil for people with dyslexia",
        tagline="Be a part of the future",
        description="Aliquam at viverra ligula. Ut nibh diam, dignissim vel augue eget, sollicitudin molestie diam. Nulla scelerisque mi aliquam sagittis sodales. Integer eu accumsan risus. Aliquam vitae viverra nibh. Donec vel nulla facilisis, molestie mi vitae, tincidunt nisl. Aliquam leo ante, dapibus tincidunt nisi non, lobortis scelerisque mauris.",
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
        city_id=25,
        image_url='https://commonwealthprojectpictures.s3.ca-central-1.amazonaws.com/support+group.jpg',
        title="Support group for victims of Superhero Violence",
        tagline="Superman isn't always the hero",
        description="Praesent et erat sed elit cursus tristique at fermentum est. Cras commodo metus sit amet augue aliquam, quis commodo arcu sagittis. Fusce sed tortor dolor. Donec sodales tincidunt felis ut pellentesque. Donec non mi fringilla, porta felis ac, iaculis felis. Proin commodo eu odio fringilla auctor. Aliquam eget auctor augue. Donec et quam lorem.",
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
        city_id=29,
        image_url='https://commonwealthprojectpictures.s3.ca-central-1.amazonaws.com/halfway+house.jpg',
        title="Halfway House for people addicted to eating paint",
        tagline="Yes, this is a real thing.",
        description=" Proin eu metus eget purus egestas volutpat a iaculis risus. Praesent et dolor vel justo sodales porta. Donec eu ipsum congue, semper enim eu, luctus leo. Ut eu augue non turpis condimentum laoreet sed in mauris. Cras vehicula purus vitae odio semper, et porta sapien gravida",
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
        city_id=24,
        image_url='https://commonwealthprojectpictures.s3.ca-central-1.amazonaws.com/handball+court.jpg',
        title="New handball court ",
        description=" Vivamus dignissim ultrices iaculis. Morbi maximus urna at aliquam porttitor. Vivamus interdum ornare lorem, sollicitudin porta tortor venenatis posuere. Suspendisse non leo volutpat, cursus sem vitae, venenatis sapien. Curabitur nec lacus consectetur libero iaculis convallis ac id lorem. Integer vel bibendum enim, at accumsan diam",
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
        city_id=45,
        image_url='https://commonwealthprojectpictures.s3.ca-central-1.amazonaws.com/blind+jumpropes.jpg',
        title="New jumpropes for the school of the blind ",
        tagline='Just because they can"t see doesn"t mean they can"t have fun',
        description="Fusce dapibus, elit eu interdum pellentesque, orci dui finibus mi, non tempus nunc est eget magna. Nullam hendrerit ex at metus posuere laoreet. Quisque ultricies, ante non pulvinar porttitor, lacus felis convallis est, eget sollicitudin nisi velit eleifend lacus. Cras ligula lacus, auctor nec odio vel, semper facilisis lacus. Vivamus dolor sem, eleifend at tincidunt et, faucibus a purus.",
        goal=240000,
        amount_raised=190000,
        address_1="126 Killer Street",
        city="Fair Banks",
        state="Virginia",
        zipcode=11573
    )
    Project11 = Project(
        user_id=11,
        category_id=1,
        state_id=41,
        city_id=23,
        image_url='https://commonwealthprojectpictures.s3.ca-central-1.amazonaws.com/anger+management+classes.jpg',
        title="Anger Management classes",
        tagline="Help us lower the violent crime rate",
        description="Cras at posuere enim. Pellentesque mollis et arcu vitae ornare. Morbi hendrerit, velit in rutrum congue, tortor risus vestibulum nibh, eu elementum nibh sapien a arcu. Nam pretium mi in mattis interdum. Proin elementum, nulla ac faucibus consequat, arcu est rhoncus magna, nec pellentesque ipsum risus laoreet nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam blandit at lectus vel volutpat.",
        goal=50000,
        amount_raised=15000,
        address_1="126 Uptown Avenue",
        city="Union",
        state="South Dakota",
        zipcode=55566
    )
    Project12 = Project(
        user_id=24,
        category_id=1,
        state_id=29,
        city_id=30,
        image_url='https://commonwealthprojectpictures.s3.ca-central-1.amazonaws.com/penpal+project.jpg',
        title='Project Pen Pal',
        tagline="Inmates need love too!",
        description='Pellentesque pharetra auctor scelerisque. Maecenas pretium diam purus, at gravida leo laoreet nec. Suspendisse a commodo neque, a gravida purus. Suspendisse imperdiet metus lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque congue dapibus sem quis malesuada. Etiam ac ipsum eget elit gravida fringilla sit amet mollis ex. Nulla ullamcorper odio a maximus pellentesque.',
        goal=17003834,
        amount_raised=12356602,
        address_1='  3413 Kirkland Cir',
        city='Jasper',
        state='Alabama',
        zipcode=658204
    )
    Project13 = Project(
        user_id=16,
        category_id=1,
        state_id=21,
        city_id=31,
        image_url='https://commonwealthprojectpictures.s3.ca-central-1.amazonaws.com/Coding+camp+for+kids.png',
        title='Coding Camp for kids',
        tagline="You can help create the next Mark Zuckerburg!",
        description='Nulla velit purus, convallis sed euismod ac, posuere ut mauris. Sed sit amet viverra odio. Integer in interdum arcu. Nunc placerat interdum eros id suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin efficitur ornare dapibus.',
        goal=15265615,
        amount_raised=5789937,
        address_1='  7157 Genie Ln.',
        city='Skagway',
        state='Massachusetts',
        zipcode=590241
    )
    Project14 = Project(
        user_id=2,
        category_id=2,
        state_id=5,
        city_id=32,
        image_url='https://commonwealthprojectpictures.s3.ca-central-1.amazonaws.com/The+season+of+giving.jpg',
        title='The Season of Giving Project',
        tagline="No one has ever become poor by giving.",
        description='Quisque eget efficitur dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur euismod, nibh a rhoncus tristique, urna nibh auctor justo, non vestibulum quam nisi sed diam. Donec ac molestie odio. Nam id dui eu diam mattis lacinia id in risus. Donec sagittis porttitor dolor a maximus. Cras eleifend est et nulla euismod, ut laoreet risus consequat.',
        goal=9551923,
        amount_raised=5386312,
        address_1='  1241 Clover Ln.',
        city='Ojai',
        state='South Dakota',
        zipcode=269301
    )
    Project15 = Project(
        user_id=6,
        category_id=3,
        state_id=35,
        city_id=33,
        image_url='https://commonwealthprojectpictures.s3.ca-central-1.amazonaws.com/Bread+and+Bounty.jpg',
        title='Bread and Bounty',
        tagline='There is not a thing that is more positive than bread.',
        description='Donec consequat maximus ipsum mollis luctus. Curabitur sem magna, consequat nec orci id, tristique tristique nibh. Nullam nibh felis, convallis sit amet lacus at, imperdiet gravida sapien. Morbi arcu lacus, iaculis sit amet odio non, vulputate vestibulum massa. Nulla diam lectus, aliquet malesuada odio id, ultricies efficitur dolor.',
        goal=4450000,
        amount_raised=1301887,
        address_1='  289 Cedar Rd.',
        city='Rancho Cucamonga',
        state='Arizona',
        zipcode=360974
    )
    Project16 = Project(
        user_id=21,
        category_id=3,
        state_id=44,
        city_id=34,
        image_url='https://commonwealthprojectpictures.s3.ca-central-1.amazonaws.com/Giving+back+summer.jpg',
        title='Give Back Summer',
        tagline='We rise by lifting others.',
        description='Aenean vehicula tempor sem in tempor. Curabitur consectetur neque quis metus pharetra, eu dictum massa molestie. Sed mattis pretium est, nec venenatis turpis semper sit amet. Aenean consectetur congue nisl et faucibus. Duis laoreet sem id magna dignissim ullamcorper. Mauris ultricies felis dolor, vulputate pellentesque nisl semper a. Fusce congue, arcu vel faucibus mattis, urna libero varius est, id porta tortor leo varius sem. Vestibulum porttitor neque a felis iaculis, eget porta nisl malesuada.',
        goal=14472350,
        amount_raised=18810644,
        address_1='  1715 Aspen Cir',
        city='Buena Park',
        state='Alaska',
        zipcode=426895
    )
    Project17 = Project(
        user_id=11,
        category_id=3,
        state_id=46,
        city_id=35,
        image_url='https://commonwealthprojectpictures.s3.ca-central-1.amazonaws.com/The+Be+Kind+Diner.jpg',
        title='The Be Kind Diner',
        tagline='Have your cake and eat it too',
        description='Nulla velit purus, convallis sed euismod ac, posuere ut mauris. Sed sit amet viverra odio. Integer in interdum arcu. Nunc placerat interdum eros id suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin efficitur ornare dapibus.',
        goal=15072929,
        amount_raised=10912754,
        address_1='  5402 Wandering Drive',
        city='Fort Payne',
        state='Kansas',
        zipcode=991613
    )
    Project18 = Project(
        user_id=12,
        category_id=3,
        state_id=42,
        city_id=36,
        image_url='https://commonwealthprojectpictures.s3.ca-central-1.amazonaws.com/Helping+hands+and+tomatoes.webp',
        title='Helping Hands and Tomatoes',
        tagline='The man who can"t visualize a horse galloping on a tomato is an idiot',
        description='Vivamus rhoncus magna ut metus varius, at scelerisque ante interdum. In vel diam aliquet, maximus purus quis, facilisis velit. Pellentesque erat nulla, mollis eu eros a, mollis sollicitudin sem. Sed et semper eros. Curabitur nec neque eget mauris feugiat dignissim in eget velit. Nulla suscipit hendrerit mauris, nec fringilla neque aliquam euismod. Duis facilisis ipsum lobortis nisi posuere, eget luctus nisi pellentesque.',
        goal=17014250,
        amount_raised=651977,
        address_1='8026 Bald Eagle St',
        city='Mountain View',
        state='Colorado',
        zipcode=110179
    )
    Project19 = Project(
        user_id=21,
        category_id=1,
        state_id=36,
        city_id=26,
        image_url='https://commonwealthprojectpictures.s3.ca-central-1.amazonaws.com/Little+Library.jpg',
        title='The Little Library',
        tagline="Help share knowledge for generations.",
        description='Curabitur eget neque quis massa ultrices porta. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean ac justo urna. Proin ornare risus ut justo interdum pellentesque. Nullam tincidunt magna ipsum, eget eleifend justo pharetra eu. Phasellus id tempor velit. Fusce commodo pulvinar lorem sed pretium. Aliquam erat volutpat. Maecenas porttitor quis lorem non mattis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        goal=2951174,
        amount_raised=15428568,
        address_1='8026 Bald Eagle St',
        city='El Dorado',
        state='Montana',
        zipcode=298014
    )
    Project20 = Project(
        user_id=18,
        category_id=2,
        state_id=32,
        city_id=47,
        image_url='https://commonwealthprojectpictures.s3.ca-central-1.amazonaws.com/Little+Library.jpg',
        title='Learning League',
        tagline='Learning never exhausts the mind.',
        description='Nulla velit purus, convallis sed euismod ac, posuere ut mauris. Sed sit amet viverra odio. Integer in interdum arcu. Nunc placerat interdum eros id suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin efficitur ornare dapibus.',
        goal=8752241,
        amount_raised=582755,
        address_1='  1570 Patten Rd',
        city='Glendale',
        state='California',
        zipcode=145048
    )
    Project21 = Project(
        user_id=30,
        category_id=1,
        state_id=1,
        city_id=38,
        image_url='https://commonwealthprojectpictures.s3.ca-central-1.amazonaws.com/Code+for+good.jpg',
        title='Code for Good',
        tagline='Developers are good people too.',
        description='Aenean vehicula tempor sem in tempor. Curabitur consectetur neque quis metus pharetra, eu dictum massa molestie. Sed mattis pretium est, nec venenatis turpis semper sit amet. Aenean consectetur congue nisl et faucibus. Duis laoreet sem id magna dignissim ullamcorper. Mauris ultricies felis dolor, vulputate pellentesque nisl semper a. Fusce congue, arcu vel faucibus mattis, urna libero varius est, id porta tortor leo varius sem. Vestibulum porttitor neque a felis iaculis, eget porta nisl malesuada.',
        goal=15780661,
        amount_raised=7756076,
        address_1='  1238 Rudman Ave.',
        city='Anaheim',
        state='Oklahoma',
        zipcode=621216
    )
    Project22 = Project(
        user_id=4,
        category_id=1,
        state_id=49,
        city_id=39,
        image_url='https://commonwealthprojectpictures.s3.ca-central-1.amazonaws.com/The+open+spaces+project.jpg',
        title='The Open Spaces Project',
        tagline='Make your community as beautiful as the people in it.',
        description='Integer hendrerit auctor convallis. Duis a lorem vitae nulla rhoncus sodales consectetur eu massa. Sed aliquam libero sit amet enim ullamcorper, sed finibus quam dignissim. Nam commodo lectus magna, suscipit venenatis enim commodo et. Nullam eget velit quis dolor ultrices rhoncus quis ut nulla. Quisque volutpat eget nisi sit amet imperdiet. Suspendisse quis metus id nisl sodales ullamcorper eget non velit. Nullam malesuada urna a vehicula aliquet. Praesent rhoncus et lacus a tristique.',
        goal=14015921,
        amount_raised=1118644,
        address_1='  9142 Roosevelt Trl.',
        city='Scottsboro',
        state='Kansas',
        zipcode=920552
    )
    Project23 = Project(
        user_id=17,
        category_id=3,
        state_id=31,
        city_id=40,
        image_url='https://commonwealthprojectpictures.s3.ca-central-1.amazonaws.com/Trash+Taskforce.png',
        title='Trash Taskforce',
        tagline='Be part of the solution, not the pollution.',
        description='Donec sit amet efficitur lacus. In vitae facilisis erat, quis blandit leo. Curabitur quis massa bibendum, lacinia nibh ac, pulvinar nisl. Pellentesque rutrum posuere risus vel dapibus. Cras volutpat mauris ac risus auctor aliquet. Donec ultrices sapien nisl, quis pharetra augue ullamcorper quis. Morbi rutrum facilisis turpis sed viverra.',
        goal=13490165,
        amount_raised=19278263,
        address_1='  1570 Patten Rd',
        city='Batesville',
        state='Idaho',
        zipcode=978321
    )
    Project24 = Project(
        user_id=28,
        category_id=1,
        state_id=31,
        city_id=41,
        image_url='https://commonwealthprojectpictures.s3.ca-central-1.amazonaws.com/Bridgin+gaps.jpg',
        title='Bridging Gaps',
        tagline='Bridging the gap between knowledge and action.',
        description='Curabitur eget neque quis massa ultrices porta. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean ac justo urna. Proin ornare risus ut justo interdum pellentesque. Nullam tincidunt magna ipsum, eget eleifend justo pharetra eu. Phasellus id tempor velit. Fusce commodo pulvinar lorem sed pretium. Aliquam erat volutpat. Maecenas porttitor quis lorem non mattis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        goal=2238725,
        amount_raised=11119322,
        address_1='  8716 Camden Trail',
        city='Concord',
        state='Wyoming',
        zipcode=641701
    )
    Project25 = Project(
        user_id=21,
        category_id=2,
        state_id=23,
        city_id=42,
        image_url="https://commonwealthprojectpictures.s3.ca-central-1.amazonaws.com/Two's+company.jpg",
        title='Two’s Company',
        tagline='Three is a crowd.',
        description='Praesent sodales arcu ultrices nisl consectetur, nec ultrices lacus congue. Vivamus sit amet libero eu diam bibendum viverra. Morbi sed mi lectus. Sed eget justo sed est rutrum accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id eros dapibus, vestibulum urna in, laoreet turpis. Sed ut suscipit tortor.',
        goal=10271636,
        amount_raised=10016136,
        address_1='  8343 Riverview Terrace',
        city='Hayward',
        state='Texas',
        zipcode=299924
    )
    Project26 = Project(
        user_id=24,
        category_id=1,
        state_id=18,
        city_id=43,
        image_url='https://commonwealthprojectpictures.s3.ca-central-1.amazonaws.com/Tiny+Trail+Blazers.png',
        title='Tiny Trail Blazers',
        tagline='The future of the world rests in the hands of our kids.',
        description='Quisque varius fringilla libero eu eleifend. Donec sit amet elit justo. Morbi vel euismod massa. Curabitur efficitur massa vitae arcu lacinia, vitae iaculis lacus rhoncus. Praesent a interdum leo, vitae laoreet arcu. In efficitur metus mi, sit amet ornare enim convallis a. Donec sodales at magna et dictum. Duis in pellentesque libero, et convallis nisi. Vestibulum placerat maximus dolor eu ultricies. Phasellus cursus iaculis libero, nec mattis orci ultrices vel. Praesent quis massa a elit rhoncus blandit ut vel turpis. Phasellus sed ultrices urna.',
        goal=10630207,
        amount_raised=15374986,
        address_1='  1570 Patten Rd',
        city='Port Hueneme',
        state='Connecticut',
        zipcode=682300
    )
    Project27 = Project(
        user_id=18,
        category_id=3,
        state_id=22,
        city_id=44,
        image_url='https://commonwealthprojectpictures.s3.ca-central-1.amazonaws.com/Summer+of+volunteering.jpg',
        title='Summer of Volunteering',
        tagline='Giving is not just about making a donation.',
        description='Vivamus rhoncus magna ut metus varius, at scelerisque ante interdum. In vel diam aliquet, maximus purus quis, facilisis velit. Pellentesque erat nulla, mollis eu eros a, mollis sollicitudin sem. Sed et semper eros. Curabitur nec neque eget mauris feugiat dignissim in eget velit. Nulla suscipit hendrerit mauris, nec fringilla neque aliquam euismod. Duis facilisis ipsum lobortis nisi posuere, eget luctus nisi pellentesque.',
        goal=17758549,
        amount_raised=12381114,
        address_1='  4004 Hickory Court',
        city='Kodiak',
        state='Michigan',
        zipcode=370318
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
    db.session.add(Project12)
    db.session.add(Project13)
    db.session.add(Project14)
    db.session.add(Project15)
    db.session.add(Project16)
    db.session.add(Project17)
    db.session.add(Project18)
    db.session.add(Project19)
    db.session.add(Project20)
    db.session.add(Project21)
    db.session.add(Project22)
    db.session.add(Project23)
    db.session.add(Project24)
    db.session.add(Project25)
    db.session.add(Project26)
    db.session.add(Project27)

    db.session.commit()


def undo_projects():
    db.session.execute('TRUNCATE projects RESTART IDENTITY CASCADE;')
    db.session.commit()
