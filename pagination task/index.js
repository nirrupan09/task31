var tableData = [
	{
		"id": "1",
		"name": "Lura Senger",
		"email": "Xander_Collier@yahoo.com"
	  },
	  {
		"id": "2",
		"name": "Wilburn Weber",
		"email": "Bennett_Kreiger11@yahoo.com"
	  },
	  {
		"id": "3",
		"name": "Tyrique Hahn",
		"email": "Juston.Altenwerth@yahoo.com"
	  },
	  {
		"id": "4",
		"name": "Lenny Bailey",
		"email": "Guiseppe_Hegmann@yahoo.com"
	  },
	  {
		"id": "5",
		"name": "Vladimir Keeling",
		"email": "Louisa_Walsh18@hotmail.com"
	  },
	  {
		"id": "6",
		"name": "Kellie Crona",
		"email": "Chandler_Abernathy@yahoo.com"
	  },
	  {
		"id": "7",
		"name": "Carolina White",
		"email": "Royal50@hotmail.com"
	  },
	  {
		"id": "8",
		"name": "Alfredo Conn",
		"email": "Clarabelle34@hotmail.com"
	  },
	  {
		"id": "9",
		"name": "Stan Shanahan",
		"email": "Lamar.McClure@hotmail.com"
	  },
	  {
		"id": "10",
		"name": "Marvin Fay",
		"email": "Osbaldo58@hotmail.com"
	  },
	  {
		"id": "11",
		"name": "Torrance Rau",
		"email": "Orin45@gmail.com"
	  },
	  {
		"id": "12",
		"name": "Harold Gutmann MD",
		"email": "Alyce.Stracke37@yahoo.com"
	  },
	  {
		"id": "13",
		"name": "Taryn Torphy",
		"email": "Dean_Breitenberg71@hotmail.com"
	  },
	  {
		"id": "14",
		"name": "Bryana Lang",
		"email": "Tatum.Ullrich@yahoo.com"
	  },
	  {
		"id": "15",
		"name": "Nyasia Green DDS",
		"email": "Dino83@gmail.com"
	  },
	  {
		"id": "16",
		"name": "Nasir Gerhold",
		"email": "Lilian_Bashirian8@hotmail.com"
	  },
	  {
		"id": "17",
		"name": "Raymundo Ritchie PhD",
		"email": "Antwan.Schoen15@yahoo.com"
	  },
	  {
		"id": "18",
		"name": "Delmer Marvin",
		"email": "Kiera62@yahoo.com"
	  },
	  {
		"id": "19",
		"name": "Rachel Wilkinson",
		"email": "Foster_Conroy@gmail.com"
	  },
	  {
		"id": "20",
		"name": "Gladys Howell",
		"email": "Constance.Labadie10@yahoo.com"
	  },
	  {
		"id": "21",
		"name": "Ciara Klocko",
		"email": "Harvey76@yahoo.com"
	  },
	  {
		"id": "22",
		"name": "Quentin O'Kon",
		"email": "Amely_Cummings2@yahoo.com"
	  },
	  {
		"id": "23",
		"name": "Ms. Gabriella Kunde",
		"email": "Lorenza_Cummerata@hotmail.com"
	  },
	  {
		"id": "24",
		"name": "Gerald Reilly",
		"email": "Lia_Konopelski@gmail.com"
	  },
	  {
		"id": "25",
		"name": "Brody Carter I",
		"email": "Colten.Wilderman90@hotmail.com"
	  },
	  {
		"id": "26",
		"name": "Alanis Klocko",
		"email": "Johathan.Champlin69@gmail.com"
	  },
	  {
		"id": "27",
		"name": "Caroline Miller",
		"email": "Delaney.Kozey74@gmail.com"
	  },
	  {
		"id": "28",
		"name": "Ms. Merritt McClure",
		"email": "Wendy.Zieme@gmail.com"
	  },
	  {
		"id": "29",
		"name": "Jovani Schoen",
		"email": "Norval_Zieme@hotmail.com"
	  }
	 
	  
]


/*
1 - Loop Through Array & Access each value
2 - Create Table Rows & append to table
*/


var state = {
'querySet': tableData,

'page': 1,
'rows': 5,
'window': 5,
}

buildTable()

function pagination(querySet, page, rows) {

var trimStart = (page - 1) * rows
var trimEnd = trimStart + rows

var trimmedData = querySet.slice(trimStart, trimEnd)

var pages = Math.round(querySet.length / rows);

return {
	'querySet': trimmedData,
	'pages': pages,
}
}

function pageButtons(pages) {
var wrapper = document.getElementById('pagination-wrapper')

wrapper.innerHTML = ``
console.log('Pages:', pages)

var maxLeft = (state.page - Math.floor(state.window / 2))
var maxRight = (state.page + Math.floor(state.window / 2))

if (maxLeft < 1) {
	maxLeft = 1
	maxRight = state.window
}

if (maxRight > pages) {
	maxLeft = pages - (state.window - 1)
	
	if (maxLeft < 1){
		maxLeft = 1
	}
	maxRight = pages
}



for (var page = maxLeft; page <= maxRight; page++) {
	wrapper.innerHTML += `<button value=${page} class="page btn btn-sm btn-info">${page}</button>`
}

if (state.page != 1) {
	wrapper.innerHTML = `<button value=${1} class="page btn btn-sm btn-info">&#171; First</button>` + wrapper.innerHTML
}

if (state.page != pages) {
	wrapper.innerHTML += `<button value=${pages} class="page btn btn-sm btn-info">Last &#187;</button>`
}

$('.page').on('click', function() {
	$('#table-body').empty()

	state.page = Number($(this).val())

	buildTable()
})

}


function buildTable() {
var table = $('#table-body')

var data = pagination(state.querySet, state.page, state.rows)
var myList = data.querySet

for (var i = 1 in myList) {
	//Keep in mind we are using "Template Litterals to create rows"
	var row = `<tr>
			  <td>${myList[i].id}</td>
			  <td>${myList[i].name}</td>
			  <td>${myList[i]. email}</td>
			  `
	table.append(row)
}

pageButtons(data.pages)
}






