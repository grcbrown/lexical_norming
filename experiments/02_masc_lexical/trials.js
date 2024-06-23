let trial_objects = [
    {
        "stimulus": ['<p style="font-weight:bold;">'+"Do you see an amber cup?"+'</p>'+"<br><br>How masculine is the speaker of this sentence?<br><br>"],
        "expected": "non_masc",
        "comp": "True or False: The speaker asked about a cup.<br><br>", 
        "comp_button": ['True','False'],
        "correct": 0,
        "triplet_id": 13
    },
    {
        "stimulus": ['<p style="font-weight:bold;">'+"At the pier, I took a cute photo of the sea."+'</p>'+"<br><br>How masculine is the speaker of this sentence?<br><br>"],
        "expected": "non_masc", 
        "comp": "What did the speaker photograph?<br><br>",
        "comp_button": ['The sunset', 'The sea', 'The sand'],
        "correct": 1,
        "triplet_id": 7
    },
    {
        "stimulus": ['<p style="font-weight:bold;">'+"I feel sorry for the poor thing."+'</p>'+"<br><br>How masculine is the speaker of this sentence?<br><br>"],
        "expected": "non_masc", 
        "comp": "True or False: The speaker discussed what they ate for dinner.<br><br>",
        "comp_button": ['True','False'],
        "correct": 1,
        "triplet_id": 1
    },
    {
        "stimulus": ['<p style="font-weight:bold;">'+"Pardon me, I didn't see you there."+'</p>'+"<br><br>How masculine is the speaker of this sentence?<br><br>"],
        "expected": "non_masc", 
        "comp": "True or False: The speaker apologized.<br><br>",
        "comp_button": ['True','False'],
        "correct": 0,
        "triplet_id": 21
    },
    {
        "stimulus": ['<p style="font-weight:bold;">'+"That room had one vile scent."+'</p>'+"<br><br>How masculine is the speaker of this sentence?<br><br>"],
        "expected": "non_masc", 
        "comp": "What smelled bad?<br><br>",
        "comp_button": ['The food', 'The dog', 'The room'],
        "correct": 2,
        "triplet_id": 18
    },
    {
        "stimulus": ['<p style="font-weight:bold;">'+"I totally believed that scene."+'</p>'+"<br><br>How masculine is the speaker of this sentence?<br><br>"],
        "expected": "non_masc", 
        "comp": "True or False: The speaker discussed their pet cat.<br><br>",
        "comp_button": ['True','False'],
        "correct": 1,
        "triplet_id": 8
    },
    {
        "stimulus": ['<p style="font-weight:bold;">'+"We thought your talk sounded perfect."+'</p>'+"<br><br>How masculine is the speaker of this sentence?<br><br>"],
        "expected": "non_masc", 
        "comp": "Did the speaker enjoy the presentation?<br><br>",
        "comp_button": ['Yes', 'No'],
        "correct": 0,
        "triplet_id": 2
    },
    {
        "stimulus": ['<p style="font-weight:bold;">'+"Oh no, I'm not saying that."+'</p>'+"<br><br>How masculine is the speaker of this sentence?<br><br>"],
        "expected": "neutral", 
        "comp": "True or False: The speaker agreed to say something.<br><br>",
        "comp_button": ['True','False'],
        "correct": 1,
        "triplet_id": 19
    },
    {
        "stimulus": ['<p style="font-weight:bold;">'+"I was laughing during the whole comedy set."+'</p>'+"<br><br>How masculine is the speaker of this sentence?<br><br>"],
        "expected": "neutral", 
        "comp": "What did the speaker laugh at?<br><br>",
        "comp_button": ['A movie','A comedy set','A play'],
        "correct": 1,
        "triplet_id": 11
    },
    {
        "stimulus": ['<p style="font-weight:bold;">'+"The party will be so fun."+'</p>'+"<br><br>How masculine is the speaker of this sentence?<br><br>"],
        "expected": "neutral", 
        "comp": "What event is the speaker talking about?<br><br>",
        "comp_button": ['A party','A wedding','A graduation'],
        "correct": 0,
        "triplet_id": 15
    },
    {
        "stimulus": ['<p style="font-weight:bold;">'+"My final set had me feeling worn out."+'</p>'+"<br><br>How masculine is the speaker of this sentence?<br><br>"],
        "expected": "neutral", 
        "comp": "True or False: The speaker was angry.<br><br>",
        "comp_button": ['True','False'],
        "correct": 1, 
        "triplet_id": 10
    },
    {
        "stimulus": ['<p style="font-weight:bold;">'+"I saw you got a new copper mug."+'</p>'+"<br><br>How masculine is the speaker of this sentence?<br><br>"],
        "expected": "neutral", 
        "comp": "What item is the speaker talking about?<br><br>",
        "comp_button": ['A plate','A bowl','A mug'],
        "correct": 2,
        "triplet_id": 6
    },
    {
        "stimulus": ['<p style="font-weight:bold;">'+"I said that movie looked very entertaining."+'</p>'+"<br><br>How masculine is the speaker of this sentence?<br><br>"],
        "expected": "neutral", 
        "comp": "True or False: The speaker thinks the movie looks entertaining.<br><br>",
        "comp_button": ['True', 'False'],
        "correct": 0,
        "triplet_id": 12
    },
    {
        "stimulus": ['<p style="font-weight:bold;">'+"Sam looked really tired on Monday."+'</p>'+"<br><br>How masculine is the speaker of this sentence?<br><br>"],
        "expected": "neutral", 
        "comp": "Who looked tired on Monday?<br><br>",
        "comp_button": ['Sam', 'Tom', 'Pat'],
        "correct": 0,
        "triplet_id": 9
    },
    {
        "stimulus": ['<p style="font-weight:bold;">'+"I bought a blue suit for Todd."+'</p>'+"<br><br>How masculine is the speaker of this sentence?<br><br>"],
        "expected": "non_masc", 
        "comp": "What did the speaker purchase?<br><br>",
        "comp_button": ['A dress','A book','A suit'],
        "correct": 2,
        "triplet_id": 4
    },
    {
        "stimulus": ['<p style="font-weight:bold;">'+"Dude, you won't believe who I bumped into on Saturday."+'</p>'+"<br><br>How masculine is the speaker of this sentence?<br><br>"],
        "expected": "non_masc", 
        "comp": "When did the speaker bump into someone?<br><br>",
        "comp_button": ['Monday','Friday','Saturday'],
        "correct": 2,
        "triplet_id": 5
    },
    {
        "stimulus": ['<p style="font-weight:bold;">'+"That article seemed, uh, well-written."+'</p>'+"<br><br>How masculine is the speaker of this sentence?<br><br>"],
        "expected": "non_masc", 
        "comp": "What did the speaker think was well-researched?<br><br>",
        "comp_button": ['The book','The show','The article'],
        "correct": 2,
        "triplet_id": 14
    },
    {
        "stimulus": ['<p style="font-weight:bold;">'+"We had a wild summer."+'</p>'+"<br><br>How masculine is the speaker of this sentence?<br><br>"],
        "expected": "non_masc", 
        "comp": "What season did the speaker enjoy?<br><br>",
        "comp_button": ['Spring','Winter','Summer','Fall'],
        "correct": 2,
        "triplet_id": 16
    },
    {
        "stimulus": ['<p style="font-weight:bold;">'+"That seminar was crazy boring."+'</p>'+"<br><br>How masculine is the speaker of this sentence?<br><br>"],
        "expected": "non_masc", 
        "comp": "Did the speaker enjoy the seminar?<br><br>",
        "comp_button": ['Yes','No'],
        "correct": 1,
        "triplet_id": 20
    },
    {
        "stimulus": ['<p style="font-weight:bold;">'+"The cook prepared the mouthwatering soup."+'</p>'+"<br><br>How masculine is the speaker of this sentence?<br><br>"],
        "expected": "non_masc", 
        "comp": "What did the cook prepare?<br><br>",
        "comp_button": ['Soup','Steak','Salad'],
        "correct": 0,
        "triplet_id": 17
    },
    {
        "stimulus": ['<p style="font-weight:bold;">'+"I hear what you're saying, bro."+'</p>'+"<br><br>How masculine is the speaker of this sentence?<br><br>"],
        "expected": "non_masc", 
        "comp": "True or False: The speaker referred to the listener as 'dude'.<br><br>",
        "comp_button": ['True','False'],
        "correct": 1,
        "triplet_id": 3
    }
]

//template: ['<p style="font-weight:bold;">'+'STIMULUS'+'</p>'+"<br><br>How masculine is the speaker of this sentence?<br><br>"]

let gender_objects = [
    {
        "stimulus": "People can be both aggressive and nurturing regardless of sex.<br><br>",
        "coding": "NEGATIVE"
    },
    {
        "stimulus": "People should be treated the same regardless of their sex.<br><br>",
        "coding": "NEGATIVE"
    },
    {
        "stimulus": "The freedom that children are given should be determined by their age and maturity level and not by their sex.<br><br>",
        "coding": "NEGATIVE"
    },
    {
        "stimulus": "Tasks around the house should not be assigned by sex.<br><br>",
        "coding": "NEGATIVE"
    },
    {
        "stimulus": "We should stop thinking about whether people are male or female and focus on other characteristics.<br><br>",
        "coding": "NEGATIVE"
    },
    {
        "stimulus": "A father’s major responsibility is to provide financially for his children.<br><br>",
        "coding": "POSITIVE"
    },
    {
        "stimulus": "Men are more sexual than women.<br><br>",
        "coding": "POSITIVE"
    },
    {
        "stimulus": "Some types of work are just not appropriate for women.<br><br>",
        "coding": "POSITIVE"
    },
    {
        "stimulus": "Mothers should make most decisions about how children are brought up.<br><br>",
        "coding": "POSITIVE"
    },
    {
        "stimulus": "Mothers should work only if necessary.<br><br>",
        "coding": "POSITIVE"
    },
    {
        "stimulus": "Girls should be protected and watched over more than boys.<br><br>",
        "coding": "POSITIVE"
    },
    {
        "stimulus": "Only some types of work are appropriate for both men and women.<br><br>",
        "coding": "POSITIVE"
    },
    {
        "stimulus": "For many important jobs, it is better to choose men instead of women.<br><br>",
        "coding": "POSITIVE"
    }
]