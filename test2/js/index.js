'use strict'

	var hotels = [
		{
			name: 'Hotel Yorba',
			count: 27,
		},

		{
			name: 'Hotel California',
			count: 9,
		},

		{
			name: 'Blue Hotel',
			count: 33
		}
	]
		
	function enterNumber() {

		var hotelNum = prompt(`Введите номер отеля: ${hotels[0].name}, ${hotels[1].name}, ${hotels[2].name}`);

		function needPlaces() {

			var numPlaces = prompt(`${hotels[(hotelNum)-1].count} свободных мест. А сколько нужно?`);

			if (numPlaces <= hotels[(hotelNum)-1].count) {
				hotels[(hotelNum)-1].count = hotels[(hotelNum)-1].count - numPlaces;
				alert('Группа успешно зарегистрирована');
				enterNumber();
				
			} else if (numPlaces > hotels[(hotelNum)-1].count) {
				alert('Недостаточно мест');
				needPlaces();
			}
		}
		needPlaces();
	}
	enterNumber();

	


