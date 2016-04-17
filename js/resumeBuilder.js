// jQuery to raw js http://www.sitepoint.com/jquery-vs-raw-javascript-1-dom-forms/
// json needed format https://raw.githubusercontent.com/cherylcourt/resume/gh-pages/js/resumeBuilder.js
var bio = {
	"name": "Divy Garg",
	"role": "Computer software",
	"contacts": {
		"email": "divygarg95@gmail.com",
		"github": "divygarg",
		"twitter": "@",
		"location": "Jaipur, India"
	},
	"picture": "",
	"welcomeMessage": "Howdy! I am a Software developer. Look around this page for more.",
	"skills": ["Java", "Python", "Algorithms + Datastructures", "HTML + CSS", "Javascript"]
};
var work = {
	"jobs": [
		{
				
		},
		
	]
};
var education = {
	"schools": [
		{   
			"name": "Birla Institute of Technology",
			"graduated": "2017",
			"location": "Jaipur, India",
			"major": "COmputer Science",
			"degree": "Bachelor of Engineering"
		},
			
	],
	"onlineCourses": [	
		{ 
			
		}
	]
};
var projects = {
	"projects": [
		{
			
		}
	]
};
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

var headerElem = document.getElementById("header");
headerElem.innerHTML += formattedName;
headerElem.innerHTML += formattedRole;
headerElem.innerHTML += formattedBioPic;
headerElem.innerHTML += formattedWelcomeMsg;

if (bio.skills.length > 0) {
	headerElem.innerHTML += HTMLskillsStart;
	var skillsElem = document.getElementById("skills");
	for(i in bio.skills) {
		skillsElem.innerHTML += (HTMLskills.replace("%data%", bio.skills[i]));
	}
}
for(i in formattedContactInfo) {
//	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}
function displayWork() {
		for(var i in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;
			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
		}
}

if(work.jobs.length > 0) {
		$("#workExperience").append(HTMLworkStart);
		displayWork();
}

function inName(name) {
	// example inName("santhosh vaiyapuri") == "Santhosh VAIYAPURI"
	name = bio.name;
	var arr = name.split(" ");
	arr[0] = arr[0].slice(0,1).toUpperCase() + arr[0].slice(1);
	return arr[0] + " " + arr[1].toUpperCase();
}

var maindiv =  document.getElementById("main");
maindiv.innerHTML += internationalizeButton;

projects.display = function() {
		if(projects.projects.length > 0) {
			for(var i in projects.projects) {
				$("#projects").append(HTMLprojectStart);

				var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
				var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
				var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

				$(".project-entry:last").append(formattedProjectTitle);
				$(".project-entry:last").append(formattedProjectDates);
				$(".project-entry:last").append(formattedProjectDescription);

				for(var img in projects.projects[i].images) {
					var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
					$(".project-entry:last").append(formattedProjectImage);
				}
			}
		}
};

projects.display();

$("#mapDiv").append(googleMap);

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].graduated);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);			

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {				
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}
		
	}
}

education.display();