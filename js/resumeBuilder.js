/*
This is empty on purpose! Your code to build the resume will go here.
 */

var data = "%data%";
var bio = {
    "name": "Sankit Acharya",
    "role": "Front End Developer",
    "contacts": {
        "email": "sankit.acharya@gmail.com",
        "mobile": "+91-8658138888",
        "github": "sankitshane",
        "location": "banaglore",
        "twitter": "sankitshane"
    },
    "biopic": "images/fry.jpg",
    "welcomeMessage": "Hey there, Welcome to my website",
    "skills": ["c++", "python", "java", "Django"]
};

bio.display = function() {
    var name = HTMLheaderName.replace(data, bio.name);
    var role = HTMLheaderRole.replace(data, bio.role);

    $('#header').prepend(role);
    $('#header').prepend(name);

    var mobile = HTMLmobile.replace(data, bio.contacts.mobile);
    $('#topContacts').append(mobile);
    $('#footerContacts').append(mobile);
    var email = HTMLemail.replace(data, bio.contacts.email);
    $('#topContacts').append(email);
    $('#footerContacts').append(email);
    var twitter = HTMLtwitter.replace(data, bio.contacts.twitter);
    $('#topContacts').append(twitter);
    $('#footerContacts').append(twitter);
    var github = HTMLgithub.replace(data, bio.contacts.github);
    $('#topContacts').append(github);
    $('#footerContacts').append(github);
    var loc = HTMLlocation.replace(data, bio.contacts.location);
    $('#topContacts').append(loc);
    $('#footerContacts').append(loc);

    var biopic = HTMLbioPic.replace(data, bio.biopic);
    $('#header').append(biopic);
    var welmsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
    $('#header').append(welmsg);

    if (bio.skills.length > 0) {
        $("#header:last").append(HTMLskillsStart);
        var count = 0;

        for(var i =0 ;i<bio.skills.length ; i++) {
            var formattedSkills = HTMLskills.replace(data, bio.skills[count]);
            $("#skills").append(formattedSkills);
            count += 1;
        }
    }
};


var work = {
    "jobs": [{
        "employer": "IYDA",
        "title": "Web Developer",
        "location": "Cairo,Egypt",
        "dates": "1st june 2014",
        "description": "My job there was really amazing , as a web develper I had a great"+
        "time making their website and enjoy my time with wonderful people"
    }, {
        "employer": "Accenture",
        "title": "ASE",
        "location": "bangalore",
        "dates": "18th May 2016",
        "description": "Im a Associate Software Engineer"
    }]
};

work.display = function() {
    for(var job=0; job<work.jobs.length; job++) {
        if (work.jobs.length > 0) {
            $("#workExperience").append(HTMLworkStart);
            var employer = HTMLworkEmployer.replace(data, work.jobs[job].employer);
            var title = HTMLworkTitle.replace(data, work.jobs[job].title);
            var total = employer + title;
            $(".work-entry:last").append(total);

            var date = HTMLworkDates.replace(data, work.jobs[job].dates);
            $(".work-entry:last").append(date);

            var location = HTMLworkLocation.replace(data, work.jobs[job].location);
            $(".work-entry:last").append(location);

            var description = HTMLworkDescription.replace(data, work.jobs[job].description);
            $(".work-entry:last").append(description);
        }
    }
};

var education = {
    "schools": [{
        "name": "KIIT Internationl school",
        "degree": "High School",
        "location": "Bhubaneswar",
        "dates": "2010-2012",
        "majors": ["General Sciences", "computer sciences"],
        "url":"www.kiit-is.com"
    }, {
        "name": "KIIT University",
        "degree": "Engineering",
        "location": "Bhubaneswar",
        "dates": "2012-2016",
        "majors": ["Electronics", "Communication"],
        "url":"www.kiit.ac.in"
    }],
    "onlineCourses": [{
        "title": "Front End Developer",
        "school": "Udacity",
        "dates": "6th june 2016",
        "url": "www.udacity.com"

    }]
};

education.display = function() {
    for(var school=0; school <education.schools.length; school++) {
        if (education.schools.length > 0) {
            $('#education').append(HTMLschoolStart);
            var name = HTMLschoolName.replace(data, education.schools[school].name).replace('%data1%', education.schools[school].degree);
            //$('.education-entry:last').append(name);
            //var deg = HTMLschoolDegree.replace(data,education.schools[school].degree);
            $('.education-entry:last').append(name);
            var date = HTMLschoolDates.replace(data, education.schools[school].dates);
            $('.education-entry:last').append(date);
            var loc = HTMLschoolLocation.replace(data, education.schools[school].location);
            $('.education-entry:last').append(loc);

            for(var major=0 ;major<education.schools[school].majors.length ; major++) {
                if (education.schools[school].majors.length > 0) {
                    var mj = HTMLschoolMajor.replace(data, education.schools[school].majors[major]);
                    $('.education-entry:last').append(mj);
                }
            }
        }
    }
    $('.education-entry:last').append(HTMLonlineClasses);
    for(var courses=0 ; courses<education.onlineCourses.length ; courses++) {
        if (education.onlineCourses.length > 0) {
            var title = HTMLonlineTitle.replace(data, education.onlineCourses[courses].title).replace('%data1%', education.onlineCourses[courses].school);
            //$('.education-entry:last').append(title);
            //var school = HTMLonlineSchool.replace(data,education.onlineCourses[courses].school);
            $('.education-entry:last').append(title);
            var edu_date = HTMLonlineDates.replace(data, education.onlineCourses[courses].dates);
            $('.education-entry:last').append(edu_date);
            var url = HTMLonlineURL.replace(data, education.onlineCourses[courses].url);
            $('.education-entry:last').append(url);
        }
    }
};


var projects = {
    "projects": [{
        "title": "HRS app",
        "link": "https://github.com/sankitshane/HRSapp",
        "dates": "4/05/2015",
        "description": "It is a c++ Console application project that works alongside"+
        "with Oracle sql to store data , making queres run through c++ function and store"+
        "data and use data through c++.",
        "images": ["images/menu.jpg"]
    }, {
        "title": "claim express",
        "link": "https://github.com/sankitshane/J2EE-Project",
        "dates": "2014",
        "description": "It is a Java Servlet web Application with IBM DB2 as the"+
        "backend database to store data and access through java program .It is on"+
        "registering medical claims and to automise the claim process.",
        "images": ["images/j2ee.png"]
    }]
};

projects.display = function() {

    for(var project=0;project<projects.projects.length ; project++) {
        if (projects.projects.length > 0) {
            $('#projects').append(HTMLprojectStart);
            var title = HTMLprojectTitle.replace(data, projects.projects[project].title).replace('#', projects.projects[project].link);
            $('.project-entry:last').append(title);
            var date = HTMLprojectDates.replace(data, projects.projects[project].dates);
            $('.project-entry:last').append(date);
            var des = HTMLprojectDescription.replace(data, projects.projects[project].description);
            $('.project-entry:last').append(des);
            for(var image=0 ;image< projects.projects[project].images.length ; image++) {
              if(projects.projects[project].images.length > 0) {
              var img = HTMLprojectImage.replace(data, projects.projects[project].images);
              $('.project-entry:last').append(img);
              }
            }
        }
    }
};

$('#mapDiv').append(googleMap);



/*
function inName(first,second)
{
  first = first[0].toUpperCase() + first.slice(1);
  second = second.toUpperCase();

  var main = first + " " + second;

  return main;
}*/

bio.display();
work.display();
projects.display();
education.display();
