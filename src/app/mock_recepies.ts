import { Recipe } from './models/recipe';

export const RECIPES: Recipe[] = [
  {
    id: 1,
    title: 'Spaghetti Bolognese',
    imageSrc:
      'https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg',
    description:
      'Our best ever spaghetti Bolognese is super easy and a true Italian classic',
    cuisineType: 'italian',
    rating: 3.5,
    isFavorite: true,
    cookDuration: 30,
    ingredients: ['garlic', 'tomato', 'parmesan', 'beef', 'onion', 'spaghetti'],
    steps:
      'Put the onion and oil in a large pan and fry over a fairly high heat for 3-4 mins.Add the garlic and mince and fry until they both brown.Add the mushrooms and herbs, and cook for another couple of mins.Stir in the tomatoes, beef stock, tomato ketchup or purée, Worcestershire sauce and seasoning.Bring to the boil, then reduce the heat, cover and simmer, stirring occasionally, for 30 mins.Meanwhile, cook the spaghetti in a large pan of boiling, salted water, according to packet instructions.Drain well, run hot water through it, put it back in the pan and add a dash of olive oil, if you like, then stir in the meat sauce.Serve in hot bowls and hand round Parmesan cheese, for sprinkling on top.'
  },
  {
    id: 2,
    title: 'Lasagne',
    imageSrc:
      'https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg',
    description:
      'Not sure what to make for dinner? This lasagne recipe is easy and delicious',
    cuisineType: 'italian',
    rating: 0,
    isFavorite: false,
    cookDuration: 40,
    ingredients: [
      'onion',
      'beef ',
      'tomato',
      'celery',
      'spaghetti',
      'carrot',
      'bacon',
      'lasagne sheets',
      'honey'
    ],
    steps:
      'Use kitchen scissors to snip the bacon into small pieces, or use a sharp knife to chop it on a chopping board.Add the bacon to the pan and cook for just a few mins until starting to turn golden.Add the onion, celery and carrot, and cook over a medium heat for 5 mins, stirring occasionally, until softened.Add the garlic and cook for 1 min, then tip in the mince and cook, stirring and breaking it up with a wooden spoon, for about 6 mins until browned all over.Stir in the tomato purée and cook for 1 min, mixing in well with the beef and vegetables.Tip in the chopped tomatoes.Fill each can half full with water to rinse out any tomatoes left in the can, and add to the pan.Add the honey and season to taste.Simmer for 20 mins.Heat oven to 200C / 180C fan/ gas 6.To assemble the lasagne, ladle a little of the ragu sauce into the bottom of the roasting tin or casserole dish, spreading the sauce all over the base.Place 2 sheets of lasagne on top of the sauce overlapping to make it fit, then repeat with more sauce and another layer of pasta.Repeat with a further 2 layers of sauce and pasta, finishing with a layer of pasta.Put the crème fraîche in a bowl and mix with 2 tbsp water to loosen it and make a smooth pourable sauce.Pour this over the top of the pasta, then top with the mozzarella.Sprinkle Parmesan over the top and bake for 25–30 mins until golden and bubbling.Serve scattered with basil, if you like'
  },
  {
    id: 3,
    title: 'Chocolate Caramel Crispy',
    imageSrc: 'https://www.themealdb.com/images/media/meals/1550442508.jpg',
    description: 'Sweet and easy to cook caramel crispy',
    cuisineType: 'american',
    rating: 0,
    isFavorite: false,
    cookDuration: 10,
    ingredients: ['chocolate', 'mars bar ', 'butter', 'rice krispies'],
    steps:
      'Grease and line a 20 x 20cm/8" x 8" baking tin with parchment paper.Put the mars bars and butter in a heat proof bowl and place over a pan of barely simmering water.Mixing with a whisk, melt until the mixture is smooth.Pour over the rice krispies in a mixing bowl and mix until all the ingredients are evenly combined.Press evenly into the prepare baking tin and set aside.Melt the milk chocolate in the microwave or over a pan of barely simmering water.Spread the melted chocolate over the rice krispie mixture and leave to set in a cool place.Once set slice into squares and serve!'
  },
  {
    id: 4,
    title: 'Breakfast Potatoes',
    imageSrc: 'https://www.themealdb.com/images/media/meals/1550441882.jpg',
    description:
      'Homemade diner-style skillet breakfast potatoes are perfect to whip up for breakfast.',
    cuisineType: 'american',
    rating: 0,
    isFavorite: false,
    cookDuration: 15,
    ingredients: ['garlic', 'bacon', 'potatoes', 'parsley'],
    steps:
      "Before you do anything, freeze your bacon slices that way when you're ready to prep, it'll be so much easier to chop! Wash the potatoes and cut medium dice into square pieces.To prevent any browning, place the already cut potatoes in a bowl filled with water.In the meantime, heat 1-2 tablespoons of oil in a large skillet over medium-high heat.Tilt the skillet so the oil spreads evenly.Once the oil is hot, drain the potatoes and add to the skillet.Season with salt, pepper, and Old Bay as needed.Cook for 10 minutes, stirring the potatoes often, until brown.If needed, add a tablespoon more of oil.Chop up the bacon and add to the potatoes.The bacon will start to render and the fat will begin to further cook the potatoes.Toss it up a bit! The bacon will take 5-6 minutes to crisp.Once the bacon is cooked, reduce the heat to medium-low, add the minced garlic and toss.Season once more.Add dried or fresh parsley.Control heat as needed.Let the garlic cook until fragrant, about one minute.Just before serving, drizzle over the maple syrup and toss.Let that cook another minute, giving the potatoes a caramelized effect.Serve in a warm bowl with a sunny side up egg!"
  },
  {
    id: 5,
    title: 'French Omelette',
    imageSrc:
      'https://www.themealdb.com/images/media/meals/yvpuuy1511797244.jpg',
    description:
      'Homemade diner-style skillet breakfast potatoes are perfect to whip up for breakfast.',
    cuisineType: 'french',
    rating: 0,
    isFavorite: false,
    cookDuration: 10,
    ingredients: ['eggs', 'butter', 'parmesan', 'parsley', 'chives'],
    steps:
      'Get everything ready.Warm a 20cm (measured across the top) non-stick frying pan on a medium heat.Crack the eggs into a bowl and beat them with a fork so they break up and mix, but not as completely as you would for scrambled egg.With the heat on medium-hot, drop one knob of butter into the pan.It should bubble and sizzle, but not brown.Season the eggs with the Parmesan and a little salt and pepper, and pour into the pan.Let the eggs bubble slightly for a couple of seconds, then take a wooden fork or spatula and gently draw the mixture in from the sides of the pan a few times, so it gathers in folds in the centre.Leave for a few seconds, then stir again to lightly combine uncooked egg with cooked.Leave briefly again, and when partly cooked, stir a bit faster, stopping while there’s some barely cooked egg left.With the pan flat on the heat, shake it back and forth a few times to settle the mixture.It should slide easily in the pan and look soft and moist on top.A quick burst of heat will brown the underside.Grip the handle underneath.Tilt the pan down away from you and let the omelette fall to the edge.Fold the side nearest to you over by a third with your fork, and keep it rolling over, so the omelette tips onto a plate – or fold it in half, if that’s easier.For a neat finish, cover the omelette with a piece of kitchen paper and plump it up a bit with your fingers.Rub the other knob of butter over to glaze.Serve immediately.'
  },
  {
    id: 6,
    title: 'Classic lasagne',
    imageSrc:
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/classic-lasange.jpg?itok=aYJg59N3',
    description:
      'Kids will love to help assemble this easiest ever pasta bake with streaky bacon, beef mince, a crème fraîche sauce and gooey mozzarella',
    cuisineType: 'italian',
    rating: 0,
    isFavorite: false,
    cookDuration: 60,
    ingredients: [
      'carrot',
      'bacon',
      'celery',
      'garlic',
      'beef',
      'tomato',
      'honey',
      'mozzarella'
    ],
    steps:
      'Heat the oil in a large saucepan. Use kitchen scissors to snip the bacon into small pieces, or use a sharp knife to chop it on a chopping board. Add the bacon to the pan and cook for just a few mins until starting to turn golden. Add the onion, celery and carrot, and cook over a medium heat for 5 mins, stirring occasionally, until softened.Add the garlic and cook for 1 min, then tip in the mince and cook, stirring and breaking it up with a wooden spoon, for about 6 mins until browned all over.Stir in the tomato purée and cook for 1 min, mixing in well with the beef and vegetables. Tip in the chopped tomatoes. Fill each can half full with water to rinse out any tomatoes left in the can, and add to the pan. Add the honey and season to taste. Simmer for 20 mins.Heat oven to 200C/180C fan/gas 6. To assemble the lasagne, ladle a little of the ragu sauce into the bottom of the roasting tin or casserole dish, spreading the sauce all over the base. Place 2 sheets of lasagne on top of the sauce overlapping to make it fit, then repeat with more sauce and another layer of pasta. Repeat with a further 2 layers of sauce and pasta, finishing with a layer of pasta.Put the crème fraîche in a bowl and mix with 2 tbsp water to loosen it and make a smooth pourable sauce. Pour this over the top of the pasta, then top with the mozzarella. Sprinkle Parmesan over the top and bake for 25–30 mins until golden and bubbling. Serve scattered with basil, if you like.'
  },
  {
    id: 7,
    title: 'Apple pie',
    imageSrc:
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/user-collections/my-colelction-image/2015/12/apple-pie.jpg?itok=4g0UAGj_',
    description:
      'Kids will love to help make and eat this comforting, classic fruity pudding with homemade shortcrust pastry',
    cuisineType: 'american',
    rating: 0,
    isFavorite: false,
    cookDuration: 40,
    ingredients: ['flour', 'butter', 'apple', 'honey', 'cinnamon', 'egg'],
    steps:
      'Heat oven to 200C/180C fan/gas 6. To make the pastry, sift the flour into a large mixing bowl and add the butter or margarine. Using your fingers, mix together until the mixture resembles breadcrumbs.Add about 3 tbsp cold water – 1 tbsp at a time – to bind the mixture into a ball. Then wrap it in cling film and leave to chill in the fridge while you prepare the apples, or for 30 mins if you have time.While the pastry is chilling, core the apples, then cut into even-sized chunks so they all cook in the same amount of time. Put the apples into the pie dish, drizzle over the honey and add the cinnamon, mixed spice and about 2 tbsp water.Roll out the pastry on a floured work surface until it is large enough to cover the pie dish. Using the rolling pin, carefully lift the pastry and lay it over the top of the apple mixture. Carefully trim off the excess pastry (this can be rerolled and cut into shapes to decorate the pie crust if you like) and press the pastry edges onto the dish to create a seal.Make a small cut in the pastry so that the air can escape during cooking, then brush with beaten egg to glaze.Bake the pie in the oven for 20-30 mins until the pastry is golden and sandy in appearance and the apple filling is bubbling and hot. Serve while still warm with crème fraîche, ice cream or natural yogurt.'
  },
  {
    id: 8,
    title: 'Chicken with quinoa',
    imageSrc:
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/one-pot-chicken-with-quinoa.jpg?itok=82B_12_m',
    description:
      "An easy dish packed with vitamin-rich veg and mineral-rich quinoa - a healthy lunch or dinner choice that's quick to prepare",
    cuisineType: 'spanish',
    rating: 0,
    isFavorite: false,
    cookDuration: 35,
    ingredients: ['chicken', 'pepper', 'garlic', 'beans', 'quinoa', 'corn'],
    steps:
      'Heat the oil in a large, deep frying pan or saute pan. Season the chicken and fry over a medium-high heat for 2-3 mins each side or until golden. Transfer to a plate. Add the onion and pepper to the pan and cook for 3 mins, stirring, until softened and lightly browned.Tip in the garlic and beans, and stir-fry for 2 mins. Add the chilli and spices, then stir in the quinoa and sweetcorn. Pour in 700ml just-boiled water with 1/2 tsp flaked sea salt and bring to the boil.Return the chicken to the pan, reduce the heat to a simmer and cook for 12 mins, stirring regularly and turning the chicken occasionally. Add the kale and cook for a further 3 mins or until the quinoa and chicken are cooked through.'
  },
  {
    id: 9,
    title: 'Greek-style roast fish',
    imageSrc:
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/user-collections/my-colelction-image/2015/12/greek-style-roast-fish.jpg?itok=fAXt00pT',
    description:
      'Oven-bake white fish fillets with potatoes, tomatoes and herbs for a healthy and gluten-free weeknight dinner',
    cuisineType: 'greek',
    rating: 0,
    isFavorite: false,
    cookDuration: 60,
    ingredients: ['potatoes', 'onion', 'garlic', 'tomatoes', 'pollock'],
    steps:
      'Heat oven to 200C/180C fan/gas 6. Tip the potatoes, onion, garlic, oregano and olive oil into a roasting tin, season, then mix together with your hands to coat everything in the oil. Roast for 15 mins, turn everything over and bake for 15 mins more.Add the lemon and tomatoes, and roast for 10 mins, then top with the fish fillets and cook for 10 mins more. Serve with parsley scattered over.'
  },
  {
    id: 10,
    title: 'Burrata bruschetta',
    imageSrc:
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/09/burrata-bruschetta-with-summer-beans.jpg?itok=NsRYE5Xl',
    description:
      'Try a new twist on bruschetta, topped with burrata, broad beans, sugar snap peas, radish, mint and chilli. It makes a fab lunch or starter for a dinner party',
    cuisineType: 'italian',
    rating: 0,
    isFavorite: false,
    cookDuration: 10,
    ingredients: [
      'peas',
      'beans',
      'radishes',
      'chillies',
      ' mint',
      'parsley',
      'ciabatta'
    ],
    steps:
      'Mix the sugar snap peas, peas, broad beans and radish with the chillies and herbs in a bowl. Add the chardonnay vinegar and olive oil, and toss to coat.Heat grill to high. Brush the bread with oil and sprinkle with sea salt. Grill for 2 mins each side until lightly charred. Put each piece of toast on a small plate, then halve burratas and gently spread over the toast. Divide the summer beans, pile on top and season to serve.'
  },
  {
    id: 11,
    title: 'Feta and peach couscous',
    imageSrc:
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/08/feta-peach-couscous.jpg?itok=55zneekI',
    description:
      'Grab just four ingredients to make this easy, light lunch and enjoy a taste of summer. The combination of peaches, feta, couscous and mixed seeds is moreish',
    cuisineType: 'greek',
    rating: 0,
    isFavorite: false,
    cookDuration: 15,
    ingredients: ['peach', 'feta', 'lemon', 'garlic'],
    steps:
      'De-stone and quarter the peaches. Put in a roasting tin with the seeds, chunks of feta and drizzle over 3 tbsp olive oil. Bake for 12-15 mins at 200C/180C fan/gas 6. Cook the couscous following pack instructions. Toss the couscous with the roasted peach mixture and season to taste before serving.'
  },
  {
    id: 12,
    title: 'Huevos rancheros',
    imageSrc:
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/06/huevos-rancheros.jpg?itok=chP6q4JU',
    description:
      "Enjoy this Mexican-inspired vegetarian brunch of egg, tomato, avocado, kidney beans and cheese, on top of tortilla. It's spicy, filling and full of flavour",
    cuisineType: 'mexican',
    rating: 0,
    isFavorite: false,
    cookDuration: 15,
    ingredients: ['egg', 'tomato', 'avocado', ' beans', 'cheese', 'tortilla'],
    steps:
      'Heat 1 tbsp oil in a large pan. Add the onions with a pinch of salt, and cook until translucent, around 3-4 mins. Add the garlic and cook for a minute more.Stir in the beans, cumin, chilli powder, oregano, some seasoning and 100ml water. Cook for 5-7 mins, stirring occasionally, or until the beans have softened, then remove from the heat, mash and set aside.Heat the remaining oil in a large frying pan over a medium-high heat. Crack in the eggs, then reduce the heat to low and cook slowly until the whites are completely firm.To assemble, spread the beans onto the tortillas, add the tomatoes and jalapeños and sprinkle with cheese. Top with some avocado, a squeeze of lime juice and a fried egg, then scatter with coriander. Serve with the lime wedges on the side.'
  },
  {
    id: 13,
    title: 'Asian slaw',
    imageSrc:
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1354_11.jpg?itok=BjG8Wr-f',
    description:
      'Freshly made coleslaw is a wonderful thing, but every now and then it’s fun to zip up the formula with a burst of lively Asian flavours',
    cuisineType: 'chinese',
    rating: 0,
    isFavorite: false,
    cookDuration: 10,
    ingredients: ['cabbage', ' carrots', 'ginger', 'chilli', 'lime'],
    steps:
      'Very simply, you just mix the cabbage, carrots, ginger, chilli, lime zest and juice, the sesame seeds and oils with salt, then add a little sugar to taste. It will keep in the fridge for up to a couple of days.'
  },
  {
    id: 14,
    title: 'Sticky bourbon BBQ wings with blue cheese dip',
    imageSrc:
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/11/sticky-bourbon-bbq-wings-with-blue-cheese-dip.jpg?itok=WnsjXOUe',
    description:
      'The cool blue cheese & soured cream dip takes the edge off the heat in the sauce. Dip in the chicken wings or the celery and radishes – or do both!',
    cuisineType: 'american',
    rating: 0,
    isFavorite: false,
    cookDuration: 90,
    ingredients: [
      'chicken wings',
      ' celery',
      'tomato',
      'vinegar',
      'bourbon',
      'paprika',
      'cumin',
      'butter'
    ],
    steps:
      'Heat oven to 220C/200C fan/ gas 7. Cut the chicken wings into winglets by slicing through each of the joints. Keep the two meaty pieces and discard the wing tips, or freeze for stock.Put the winglets on a large baking sheet, drizzle with the olive oil, then season. Roast in the oven for 20 mins, then reduce the temperature to 180C/160C fan/ gas 4 and cook for a further 25 mins.Meanwhile, make the barbecue sauce. Put all the ingredients, except the butter, in a pan and mix together with plenty of black pepper. Let it bubble away for 3-5 mins to thicken up a little, then add the butter and stir until it has melted and made the sauce nice and shiny. Season to taste.Half an hour before the chicken wings are ready, take them out of the oven and brush over three-quarters of the barbecue sauce. When they’re fully cooked, toss them in the rest of the sauce so that they become sticky.In a small bowl, mash the blue cheese dressing ingredients together with some seasoning, until combined. The barbecue sauce and dip can be made a day ahead, covered and chilled. Serve alongside the wings with the celery sticks and radishes for dipping.'
  },
  {
    id: 15,
    title: 'Scotch eggs',
    imageSrc:
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1273686_8.jpg?itok=jVLaLL6T',
    description:
      'A hidden layer of bacon makes this traditional Scotch egg recipe extra special',
    cuisineType: 'british',
    rating: 0,
    isFavorite: false,
    cookDuration: 150,
    ingredients: [
      'egg',
      'mustard',
      'bacon',
      'flour',
      ' bread',
      'worcestershire sauce'
    ],
    steps:
      'Put 9 eggs into a large saucepan. Cover with cold water and bring to the boil. Once boiling, set the timer for 5 mins. When 5 mins is up, quickly lift the eggs out with a slotted spoon and plunge into a big bowl of cold water.Put the sausagemeat, parsley, Worcestershire sauce, mustard powder and mace into a bowl with plenty of seasoning. Break in 1 of the remaining eggs and mix everything together.Crack remaining 2 eggs into a bowl, beat with a fork, then sieve onto a plate. Tip the flour onto another plate and season well. Finally, tip the breadcrumbs onto a third plate.Bring a large saucepan of water to the boil. Drop in the bacon rashers, turn off the pan and fish out the bacon with a pair of tongs – it should be just cooked.When the eggs are cool, tap lightly on a hard surface to crack the shell, then peel (Picture A). If you hold the eggs over the bowl of water as you peel, all the shell bits will collect in there and you can dip in the egg to wash off any fragments. Wrap a slice of bacon around the middle of each egg, overlapping, like a belt (Picture B).Now finish coating the eggs. I set up the ingredients along my bench like a conveyer belt: eggs, then flour, mince, beaten egg and finally breadcrumbs, plus a baking parchment-lined tray at the end to put the finished scotch eggs on.Roll your bacon-wrapped eggs in the flour, shaking off excess. Take a good chunk of mince and pat out to thinly cover one hand. Sit the egg on the meat (Picture C), then mould over the mince to cover, squeezing and patting so it is an even thickness. You’ll probably have a gap (depending on how big your hands are – just patch and pat with a bit more mince). Dip in the egg, shaking off the excess, then roll in the breadcrumbs to coat, and transfer to your tray. Repeat to cover all 9 eggs, then cover with cling film and chill for 4 hrs or overnight.To cook, pour the oil in a large, deep saucepan to about 4cm deep. Heat until a small chunk of bread browns in about 1 min. Carefully lower in a scotch egg and fry for about 5 mins, turning gently, until evenly browned. Depending on your pan, you can probably do 2-3 at a time, but don’t overcrowd. Lift out onto a kitchen paper-lined tray. (If you like your scotch eggs warm, pop them into a low oven while you fry the rest.) keep an eye on the oil – if the scotch eggs start browning too quickly, the oil might be too hot and you risk the pork not being cooked before the scotch egg is browned. If the oil gets too cool, the scotch egg may overcook before it is browned. enjoy warm or cold; best eaten within 24 hrs of frying.Watch our scotch egg video for an easy to follow tutorial.'
  },
  {
    id: 16,
    title: 'Creamy beetroot curry',
    imageSrc:
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1125484_11.jpg?itok=Ss3-snfR',
    description:
      'Try an original approach to serving thickly sliced beetroot by combining with Madras spices, mustard seeds and green chilli',
    cuisineType: 'indian',
    rating: 0,
    isFavorite: false,
    cookDuration: 55,
    ingredients: [
      'onion',
      'mustard',
      'curry',
      'beetroot',
      'chilli',
      'tomato',
      'almond',
      'yogurt'
    ],
    steps:
      'Heat the oil in a large lidded pan, stir in the onions and cook for 8 mins until soft. Tip in the mustard seeds and cook for 1 min until toasted. Stir through the curry paste and sizzle for 3 mins.Mix the beetroot through the spicy onions, then add the chilli, tomatoes and 2 cans of water. Cover and simmer for 30 mins, stirring occasionally, until the beetroot is tender. Remove the lid, turn up the heat and cook until the sauce is thick.Take off the heat, then stir through the almonds, yogurt and some seasoning. Top with yogurt and serve with basmati rice, if you like.'
  },
  {
    id: 17,
    title: 'Spanish chicken pie',
    imageSrc:
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1035696_10.jpg?itok=BCRuc_WE',
    description:
      "Roasted peppers, olives and paprika give this bake tons of flavour. It's a great way to use up leftover cooked chicken too",
    cuisineType: 'spanish',
    rating: 0,
    isFavorite: false,
    cookDuration: 40,
    ingredients: [
      'potato',
      'paprika',
      'garlic',
      'onion',
      'chilli',
      'tomato',
      'chicken',
      'olives'
    ],
    steps:
      'Heat oven to 200C/fan 180C/gas 6. Boil the potatoes for 15-20 mins until tender. Drain, return to the pan, then mash with some seasoning and 2 tsp of the paprika.Meanwhile, heat the oil in a large pan, then fry the onions and garlic for a few mins until softened. Stir in the remaining paprika for 1 min, add the tomatoes , then, bring to a simmer. Tip into a large ovenproof dish, then stir in the chicken, peppers, olives and some seasoning.Spoon over the mash, then bake for 15 mins until the mash is golden on top and the sauce is bubbling.'
  },
  {
    id: 18,
    title: 'Quick gazpacho',
    imageSrc:
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--7360_11.jpg?itok=yQ571UNj',
    description:
      'Packed with vitamin C, low fat and counts as two of your five a day – this should be on the menu every week!',
    cuisineType: 'spanish',
    rating: 0,
    isFavorite: false,
    cookDuration: 10,
    ingredients: ['pepper', 'garlic', 'chilli', 'vinegar', 'lime', 'tomato'],
    steps:
      'In a blender (or with a stick blender), whizz together the passata, red pepper, chilli, garlic, sherry vinegar and lime juice until smooth. Season to taste, then serve with ice cubes.'
  },
  {
    id: 19,
    title: 'Chicken wings with cumin, lemon and garlic',
    imageSrc:
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--327675_12.jpg?itok=Tff7Qhln',
    description:
      'Pick up a few extras from the deli and turn this into a Middle Eastern mezze spread to share with friends',
    cuisineType: 'turkish',
    rating: 0,
    isFavorite: false,
    cookDuration: 60,
    ingredients: ['chicken wings', 'garlic', 'lemon', 'cumin', 'honey'],
    steps:
      'Using a pair of sharp kitchen scissors, cut each wing at the knuckle into two pieces. Mix the garlic, lemon zest and juice, cumin and oil with plenty of seasoning, then tip into a dish with the chicken wings and toss to coat. Cover and put in the fridge to marinate for at least 1 hr, or overnight if you have time.Heat oven to 200C/180C fan/gas 6, or heat an outdoor barbecue. Bake the chicken wings on an oven tray for 45-50 mins until crisp, or barbecue for 20 mins, drizzling over the honey for the final 10 mins of each method. Serve on a platter with plenty of paper napkins. Fill small bowls with olives, pistachios or almonds, dates and pickled chillies and flatbreads to serve alongside, along with the dishes below.'
  },
  {
    id: 20,
    title: 'Chilli ginger lamb chops',
    imageSrc:
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1036499_11.jpg?itok=x89qTgqthttps://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--7360_11.jpg?itok=yQ571UNj',
    description:
      'Marinate your chops with ginger, lemon, chilli and cumin then chargrill until juicy in the middle',
    cuisineType: 'turkish',
    rating: 0,
    isFavorite: false,
    cookDuration: 20,
    ingredients: ['ginger', 'garlic', 'lemon', 'chilli', 'cumin', 'lamb'],
    steps:
      'Put the garlic in a bowl with the ginger, lemon juice, oil, spices and seasoning. Blitz with a hand blender until smooth, then use to coat the lamb chops on both sides. Leave to marinate in the fridge for a couple of hours or overnight.Heat a barbecue until hot. Barbecue the chops over the coals for 3 mins on each side until cooked but still pink and juicy in the centre.'
  },
  {
    id: 21,
    title: 'Chinese-style kale',
    imageSrc:
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--8692_12.jpg?itok=mqn76vWH',
    description:
      'Give a good British fave an Asian edge with a few simple shakes of the right sauces',
    cuisineType: 'chinese',
    rating: 0,
    isFavorite: false,
    cookDuration: 15,
    ingredients: ['kale', 'garlic', ' soy sauce', 'oyster sauce'],
    steps:
      'Heat the oil in a large wok or frying pan, then tip in the garlic and cook for a few secs. Throw in the kale and toss around the pan to coat in the garlicky oil.Pour over 100ml boiling water and cook for 7 mins more until the kale has wilted and is cooked through.Stir in the soy and oyster sauces and heat through to serve.'
  },
  {
    id: 22,
    title: 'Hot and sour fish soup',
    imageSrc:
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--815477_11.jpg?itok=7mgGHK7h',
    description:
      'Asian soup combines a fragrant broth with fish, seafood and light noodles, topped with strong herbs',
    cuisineType: 'vietnamese',
    rating: 0,
    isFavorite: false,
    cookDuration: 45,
    ingredients: ['ginger', 'noodles', 'fish', 'chilli', 'garlic', 'onion', ' mint', 'lime'],
    steps:
      'Put the coriander seeds and galangal or ginger in a saucepan. Pour in the stock, bring to the boil, then simmer gently for 5 mins. Leave to stand for 10 mins.Meanwhile, cook the noodles following pack instructions. Drain and keep warm. Return stock to the boil. Add the fish sauce, chillies and garlic, reduce the heat and simmer for 2 mins. Add the prawns and salmon, return to a simmer and cook gently for about 5 mins until both are firm and cooked. Add the spring onions, herbs and lime juice, to taste.Divide the noodles between soup bowls. Using a slotted spoon, lift out the prawns and fish, and place on the noodles. Season the hot stock, pour into the bowls and serve with Spring rolls on the side.'
  },
  {
    id: 23,
    title: 'Vietnamese chicken baguettes',
    imageSrc:
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/bhanmi.jpg?itok=aDtQhHcS',
    description:
      'Stuff your sandwich with chicken, carrot, cucumber, spring onion and sweet chilli dressing for Asian zing',
    cuisineType: 'vietnamese',
    rating: 0,
    isFavorite: false,
    cookDuration: 35,
    ingredients: ['chicken', 'sugar', 'carrot', 'cucumber', 'baguette', 'onion', 'lettuce', 'lime'],
    steps:
      'Put the chicken breast between 2 pieces of cling film and bash with a rolling pin to about 1cm thick. Heat a griddle pan until hot. Rub the chicken with the oil, cook for 2-3 mins per side, or until cooked through. Set aside to cool.Mix together the rice vinegar, sugar and lime juice, stirring until the sugar is dissolved. Add the carrot, spring onions, cucumber and chilli.Split a sandwich baguette along the top. Stuff with the Little Gem leaves and shred the chicken on top. Pile on the carrot mixture and wrap or place in a plastic box. Put the sweet chilli sauce in a small portable pot and when it’s time for lunch, pour over the sauce just before tucking in.'
  },
  {
    id: 24,
    title: 'Vietnamese lamb shanks with sweet potatoes',
    imageSrc:
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1079567_11.jpg?itok=sag1DTD7',
    description:
      'Meltingly tender and full of classic Asian flavours, these lamb shanks are perfect for freezing',
    cuisineType: 'vietnamese',
    rating: 0,
    isFavorite: false,
    cookDuration: 240,
    ingredients: ['lamb', 'ginger', 'chilli', 'garlic', 'tomato', 'onion', 'anise', 'lime', 'mint', 'potato'],
    steps:
      'Heat oven to 160C/140C fan/gas 3. Heat 1 tbsp oil in a heavy-bottomed casserole, season the shanks, then brown them 2 at a time on all sides, adding the remaining oil for the second batch. Remove the lamb and add the onions. Fry them quite briskly, about 30 secs, add the ginger, garlic and chopped chilli, then turn the heat down and cook for 1 min. Add 1 tbsp sugar, stir, then add the star anise, lemongrass, stock, purée and seasoning. Bring to the boil.Cover and cook in the oven for 1½ hrs, then add the sweet potatoes and cook for 1 hr more. The lamb should be completely tender and almost falling off the bones. Stir in the fish sauce, lime juice and 1 tsp sugar to just lift the flavour, then scatter with the mint, basil and the sliced chilli to serve.'
  },
  {
    id: 25,
    title: 'Vietnamese chicken salad',
    imageSrc:
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1069573_11.jpg?itok=LKSI2GNF',
    description:
      'A no-cook main course salad with all the light, fragrant flavours of Southeast Asia such as peanut, chilli, mint and soy',
    cuisineType: 'vietnamese',
    rating: 0,
    isFavorite: false,
    cookDuration: 240,
    ingredients: ['noodle', 'carrot', 'cucumber', 'radish', 'chicken', 'mint', 'lime'],
    steps:
      'To make the dressing, whisk all the ingredients together in a large serving bowl. Cook the noodles following pack instructions, then drain and add to the bowl with the dressing.Peel the carrot into long strips using a vegetable peeler. Do the same for the cucumber, until you reach the seeds (discard them). Add the carrot and cucumber to the noodle mixture along with the shredded chicken, radishes, red onion and mint. Toss well to coat in the dressing, scatter over the peanuts and serve'
  },
];
