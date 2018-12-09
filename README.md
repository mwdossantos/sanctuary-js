Welcome to sanctuary-js
=================

Dinosaur Sanctuary JS - text style based with fluid anims

Bring out as iOS app sometime

Create a sanctuary 

Populate it with dinosaurs

- Pick dinosaur from list (can only spawn a dinosaur every 5 minutes)
- You will unlock more dino’s depending on how Many of the total amount of dino’s is alive > 75%
- Score is based on: living dinosaurs / dead dinosaurs * 2.5
- (icon)DINOSAUR_NAME

Create water source = DINO_WATER 

Create food source = HERB_FOOD || CARN_FOOD

Let them live out their lives 

Dinosaur stats:

- Health
- Hunger
    - Herbivores will look for food
    - Carnivores will hunt for herbivore or look for dead dinosaur
- Thirst
    - Will look for water in the sanctuary
- Sleep
    - When sleeping and another dinosaur gets close, it only wakes up if the other dino attacks. Otherwise it will wake up after a random time between 2 minutes and 5 minutes
- Dead
    - Will fade away after 5 minutes
- Attack stat
- Defense stat

Random chance of encounter:

Fight outcome will be determined by the attack stats. The dino with the higher attack stat has a higher chance of winning the fight.

- Carnivore of same species meet (5 percent chance of fight)
- Carnivore of different species meet (60 percent chance of fight)
- Carnivore meet herbivore (Fight chance depends on hunger level of carnivore and defense stat of herbivore if defense < 75 || hunger < 25 = FIGHT )
- Herbivore meet herbivore (0% chance to fight unless same species then 15% chance to fight)


\ ゜o゜)ノ
