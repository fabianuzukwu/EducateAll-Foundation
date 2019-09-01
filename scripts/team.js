const mockTeam = [
	{
		name: "David Jian",
		userName: "@Jian",
		dept: "FRONT END",
		profilePic: null,
	},
	{
		name: "James Odili",
		userName: "@Jamie",
		dept: "FRONT END",
		profilePic: null,
	},
	{
		name: "Jane Odia",
		userName: "@Jane",
		dept: "UI/UX",
		profilePic: null,
	},
	{
		name: "Juliet Onai",
		userName: "@Julie",
		dept: "FRONT END",
		profilePic: null,
	},
	{
		name: "Amaka Ben",
		userName: "@Amaka",
		dept: "CONTENT",
		profilePic: null,
	},
	{
		name: "Chidi Jim",
		userName: "@Chidi",
		dept: "BACK END",
		profilePic: null,
	},
	{
		name: "Adesina Steve",
		userName: "@Sina",
		dept: "FRONT END",
		profilePic: null,
	},
	{
		name: "Robert Emeka",
		userName: "@Bobby",
		dept: "UI/UX",
		profilePic: null,
	},
	{
		name: "Sammy King",
		userName: "@Sammy",
		dept: "UI/UX",
		profilePic: null,
	},
	{
		name: "Magnus Carlsen",
		userName: "@Maggie",
		dept: "CONTENT",
		profilePic: null,
	},
	{
		name: "Hikaru Nakamura",
		userName: "@Naka",
		dept: "CONTENT",
		profilePic: null,
	},
	{
		name: "Jennifer Ovie",
		userName: "@Jenny",
		dept: "FRONT END",
		profilePic: null,
	},
	{
		name: "Susan Palmer",
		userName: "@Sussie",
		dept: "BACK END",
		profilePic: null,
	},
	{
		name: "Meghan Onyinye",
		userName: "@Meghan",
		dept: "FRONT END",
		profilePic: null,
	},
	{
		name: "Ben Finegold",
		userName: "@Ben",
		dept: "UI/UX",
		profilePic: null,
	},
	{
		name: "Yasser Seirawan",
		userName: "@Yass",
		dept: "FRONT END",
		profilePic: null,
	},
	{
		name: "David Navara",
		userName: "@Navara",
		dept: "BACK END",
		profilePic: null,
	},
	{
		name: "Anwuli Daniel",
		userName: "@Anwuli",
		dept: "UI/UX",
		profilePic: null,
	},
	{
		name: "Chioma Precious",
		userName: "@Presh",
		dept: "CONTENT",
		profilePic: null,
	}
];

const fillGrid = arr =>
{
	const grid = document.getElementById("team-grid");
	grid.style.display = "grid";
	while(grid.firstChild)
		grid.removeChild(grid.firstChild);
	
	for (let item of arr.sort((a, b) => a.name.localeCompare(b.name)))
	{
		let container = document.createElement("div");
		container.className = "team-member-div";

		let imgDiv = document.createElement("div");
		imgDiv.className = "profile-pic";
		let img = document.createElement("img");
		img.src = "images/team-member-pic.jpeg";
		img.height = 100;
		img.alt = "UserPicture";
		imgDiv.appendChild(img);

		let fullName = document.createElement("div");
		fullName.appendChild(document.createTextNode(item.name));
		fullName.className = "full-name";
		let userName = document.createElement("div");
		userName.appendChild(document.createTextNode(item.userName));
		userName.className = "user-name";
		let dept = document.createElement("div");
		dept.appendChild(document.createTextNode(item.dept));
		dept.className = "dept";

		container.appendChild(imgDiv);
		container.appendChild(fullName);
		container.appendChild(userName);
		container.appendChild(dept);
		grid.appendChild(container);
	}
	if (grid.childNodes.length < 1)
	{
		let p = document.createElement("p");
		p.className = "no-matches";
		p.appendChild(document.createTextNode("Sorry. No such member in selected department"))
		grid.style.display = "block";
		grid.appendChild(p);
	}
};

document.querySelector("select").addEventListener("change", () =>
{
	filter();
});

document.querySelector("#search").addEventListener("input", () =>
{
	filter();
})

const filter = () =>
{
	const select = document.querySelector("select");
	const search = document.querySelector("#search").value.toLowerCase();
	let filter = "ALL", filtered;
	switch (select.value)
	{
		case "1": filter = "BACK END"; break;
		case "2": filter = "CONTENT"; break;
		case "3": filter = "FRONT END"; break;
		case "4": filter = "UI/UX"; break;
	}
	if (filter === "ALL") 
		filtered = mockTeam;
	else 
		filtered = mockTeam.filter(guy => guy.dept === filter)

	fillGrid(search ? filtered.filter(guy => 
		guy.name.toLowerCase().includes(search) || guy.userName.toLowerCase().includes(search)) : filtered);

}

fillGrid(mockTeam);

