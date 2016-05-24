var connectFour = (function(window, $)
{
	var ai = {};
	var container;

	var init = function(config)
	{
		container = $('<div id="container">').prependTo('body');

		setupScreen();
		// addBoard($('#container'), { width: 2, height: 4 }); // in dev
	}



	var addBoard = function(parentElement, c)
	{
		if (!parentElement.length)
		{
			throw new Error('addBoard(): parentElement does not exist');
			return;
		}

		var board = $('<div class="board">');
		var config = c || {};

		if (!config.hasOwnProperty('width') || config.width < 4)
		{
			config.width = 4;
		}

		if (!config.hasOwnProperty('height') || config.height < 4)
		{
			config.height = 4;
		}

		var svg = $($('#cell-template').html());
		var cell = $('<div class="cell"></div>');
		cell.append(svg);

		for (var h = 1; h <= config.height; h++)
		{
			var row = $('<div class="row"></div>');

			for(var w = 1; w <= config.width; w++)
			{
				row.append(cell.clone());
			}

			board.append(row);
		}

		parentElement.append(board);

	};

	var setupScreen = function()
	{
		var playBtn = $('<button>Play an AI</button>');
		var simulateBtn = $('<button>Run Tests</button>');

		playBtn.on('click', function(e)
		{
			e.preventDefault();
			console.info('User vs. Computer Mode');
		});

		simulateBtn.on('click', function(e)
		{
			e.preventDefault();
			console.info('Computer vs. Computer Mode');
		});

		var options = $('<div class="setup-screen">');
		options.append(playBtn).append(simulateBtn);

		container.empty();
		container.append(options);


	}

	var registerAI = function(name, AI)
	{
		ai[name] = AI;
	}

	return {
		init: init,
		registerAI: registerAI
	};

})(window, $);

// Go!
$(document).ready(function()
{
	connectFour.init();
});



/**
 AI Requirements:
	 object with public method move(mySpots, enemySpots, available)
	 return chosen column #
 **/