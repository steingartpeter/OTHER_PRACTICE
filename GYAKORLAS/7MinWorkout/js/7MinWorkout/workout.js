//<M>
// workout.js
// Ez a file tartalmazz a workout alkalmazás kontollerét.
// 2016-01-05
// AX07057
//</M>


angular.module('7minWorkout').controller('WorkoutController', ['$scope', '$interval', '$location', 
function ($scope, $interval, $location) {
    
    "use strict";
    //<nn>
    //Excersise model:
    //Egy gyakorlatot leíó objektum.
    //</nn>
    function Excersise(args) {
        this.name = args.name;
        this.title = args.title;
        this.description = args.description;
        this.image = args.image;
        this.related = {};
        this.related.videos = args.videos;
        this.nameSound = args.nameSound;
        this.procedure = args.procedure;
    }
    
    //<nn>
    //WorkoutPlan model:
    //Az Excersise objektumok tárolója
    //</nn>
    function WorkoutPlan(args) {
        this.excersises = [];
        this.name = args.name;
        this.title = args.title;
        this.restBetweenExcersises = args.restBetweenExcersises;
        this.totalWorkoutDuration = function () {
            if(this.excersises.length == 0) {
                return 0;
            }
            var total = 0;
            angular.forEach(this.excersises, function (excersise){
               total = total + excersise.duration; 
            });
            return this.restBetweenExcersises * (this.excersises.length -1) + total;
        };
    }
    
    //<nn>
    //Egy változó a "pihi" gyakorlatnak, és egy az edzésprogramnak.
    //</nn>
    var restExcesise, workoutPlan, workoutTimeRemaining;
    
    
    //<nn>
    //Egy függvényváltozó, ami létrehozza az edzéstervet.
    //Először a new WorkoutPlan függvény segítségével létrehozunk egy edzéstervet, 
    //majd ennek az excersises tömbjébe szépen belerakodjuk az egyes gyakorlatokat.
    //Ehhez természetesen az Excersise() konstruktorfüggvényt fogjuk használni.
    //Itt mindent bedrótoztunk a kódba, normális esetben ezt mondjuk vmilyen 
    //AJAX hívással egy adatbázisból kellene kiszedni.
    //</nn>
    var createWorkout = function () {
        var workout = new WorkoutPlan({
            name: "7minWorkout",
            title: "7 Minute Workout",
            restBetweenExcersises: 10
        });
        
        //<nn>
        //1. Gyakorlat
        //</nn>
        workout.excersises.push({
            details: new Excersise({
                name: "jumpingJacks",
                title: "Jumping Jacks",
                description: "Jumping Jacks",
                image: "img/JumpingJacks.png",
                videos: [
                    "//www.youtube.com/embed/dmYwZH_BNd0",
                    "//www.youtube.com/embed/BABOdJ-2Z6o",
                    "//www.youtube.com/embed/c4DAnQ6DtF8"
                ],
                procedure: "Assume an erect position, with feet together and arms at your side.\
                            Slightly bend your knees, and propel yourself a few inches into the air.\
                            While in air, bring your legs out to the side about shoulder width or slightly wider.\
                            As you are moving your legs outward, you should raise your arms should be slightly bent throughout the entire in-air movement.\
                            Your feet should land shoulder width or wider as your hands meet above your head with arms slightly bent"
            }),
            duration: 30
        });
        
        //<nn>
        //2. Gyakorlat
        //</nn>
        workout.excersises.push({
              details: new Excersise({
                  name: "wallSit",
                  title: "Wall Sit",
                  description: "A wall sit, also known as a Roman Chair, is an exercise done to strengthen the quadriceps muscles.",
                  image: "img/wallsit.png",
                  videos: ["//www.youtube.com/embed/y-wV4Venusw", "//www.youtube.com/embed/MMV3v4ap4ro"],
                  procedure: "Place your back against a wall with your feet shoulder width apart and a little ways out from the wall.\
                              Then, keeping your back against the wall, lower your hips until your knees form right angles. "
              }),
              duration: 30
          });

        //<nn>
        //3. Gyakorlat
        //</nn>      
        workout.excersises.push({
              details: new Excersise({
                  name: "pushUp",
                  title: "Push Up",
                  description: "A push-up is a common exercise performed in a prone position by raising and lowering the body using the arms",
                  image: "img/Pushup.png",
                  videos: ["//www.youtube.com/embed/Eh00_rniF8E", "//www.youtube.com/embed/ZWdBqFLNljc", "//www.youtube.com/embed/UwRLWMcOdwI",                                 "//www.youtube.com/embed/ynPwl6qyUNM", "//www.youtube.com/embed/OicNTT2xzMI"],
                  procedure: "Lie prone on the ground with hands placed as wide or slightly wider than shoulder width. \
                              Keeping the body straight, lower body to the ground by bending arms at the elbows. \
                              Raise body up off the ground by extending the arms."
              }),
              duration: 30
          });

        //<nn>
        //4. Gyakorlat
        //</nn> 
        workout.excersises.push({
              details: new Excersise({
                  name: "crunches",
                  title: "Abdominal Crunches",
                  description: "The basic crunch is a abdominal exercise in a strength-training program.",
                  image: "img/crunches.png",
                  videos: ["//www.youtube.com/embed/Xyd_fa5zoEU", "//www.youtube.com/embed/MKmrqcoCZ-M"],
                  procedure: "Lie on your back with your knees bent and feet flat on the floor, hip-width apart.\
                              Place your hands behind your head so your thumbs are behind your ears.\
                              Hold your elbows out to the sides but rounded slightly in.\
                              Gently pull your abdominals inward.\
                              Curl up and forward so that your head, neck, and shoulder blades lift off the floor.\
                              Hold for a moment at the top of the movement and then lower slowly back down."
              }),
              duration: 30
          });

        //<nn>
        //5. Gyakorlat
        //</nn> 
        workout.excersises.push({
              details: new Excersise({
                  name: "stepUpOntoChair",
                  title: "Step Up Onto Chair",
                  description: "Step exercises are ideal for building muscle in your lower body.",
                  image: "img/stepUpOntoChair.jpeg",
                  videos: ["//www.youtube.com/embed/aajhW7DD1EA"],
                  procedure: "Position your chair in front of you.\
                              Stand with your feet about hip width apart, arms at your sides.\
                              Step up onto the seat with one foot, pressing down while bringing your other foot up next to it. \
                              Step back with the leading foot and bring the trailing foot down to finish one step-up."
              }),
              duration: 30
          });
        
        //<nn>
        //6. Gyakorlat
        //</nn> 
        workout.excersises.push({
              details: new Excersise({
                  name: "squat",
                  title: "Squat",
                  description: "The squat is a compound, full body exercise that trains primarily the muscles of the thighs, hips, buttocks and quads.",
                  image: "img/squat.png",
                  videos: ["//www.youtube.com/embed/QKKZ9AGYTi4", "//www.youtube.com/embed/UXJrBgI2RxA"],
                  procedure: "Stand with your head facing forward and your chest held up and out.\
                              Place your feet shoulder-width apart or little wider. Extend your hands straight out in front of you.\
                              Sit back and down like you're sitting into a chair. Keep your head facing straight as your upper body bends forward a bit.\                                   Rather than allowing your back to round, let your lower back arch slightly as you go down.\
                              Lower down so your thighs are parallel to the floor, with your knees over your ankles. Press your weight back into your heels.\
                              Keep your body tight, and push through your heels to bring yourself back to the starting position."
              }),
              duration: 30
          });
        
        //<nn>
        //7. Gyakorlat
        //</nn> 
        workout.excersises.push({
              details: new Excersise({
                  name: "tricepdips",
                  title: "Tricep Dips On Chair",
                  description: "A body weight exercise that targets triceps.",
                  image: "img/tricepdips.jpg",
                  videos: ["//www.youtube.com/embed/tKjcgfu44sI", "//www.youtube.com/embed/jox1rb5krQI"],
                  procedure: "Sit up on a chair. Your legs should be slightly extended, with your feet flat on the floor.\
                              Place your hands edges of the chair. Your palms should be down, fingertips pointing towards the floor.\
                              Without moving your legs, bring your glutes forward off the chair.\
                              Steadily lower yourself. When your elbows form 90 degrees angles, push yourself back up to starting position."
              }),
              duration: 30
          });
        
        //<nn>
        //8. Gyakorlat
        //</nn> 
        workout.excersises.push({
              details: new Excersise({
                  name: "plank",
                  title: "Plank",
                  description: "The plank (also called a front hold, hover, or abdominal bridge) is an isometric core strength exercise that involves maintaining a difficult position for extended periods of time. ",
                  image: "img/Plank.png",
                  videos: ["//www.youtube.com/embed/pSHjTRCQxIw", "//www.youtube.com/embed/TvxNkmjdhMM"],
                  procedure: "Get into pushup position on the floor.\
                              Bend your elbows 90 degrees and rest your weight on your forearms.\
                              Your elbows should be directly beneath your shoulders, and your body should form a straight line from head to feet.\
                              Hold this position."
              }),
              duration: 30
          });
        
        //<nn>
        //9. Gyakorlat
        //</nn> 
        workout.excersises.push({
              details: new Excersise({
                  name: "highKnees",
                  title: "High Knees",
                  description: "A form exercise that develops strength and endurance of the hip flexors and quads and stretches the hip extensors.",
                  image: "img/highknees.png",
                  videos: ["//www.youtube.com/embed/OAJ_J3EZkdY", "//www.youtube.com/embed/8opcQdC-V-U"],
                  procedure: "Start standing with feet hip-width apart. \
                              Do inplace jog with your knees lifting as much as possible towards your chest."
              }),
              duration: 30
          });
        
        //<nn>
        //10. Gyakorlat
        //</nn> 
        workout.excersises.push({
              details: new Excersise({
                  name: "lunges",
                  title: "Lunges",
                  description: "Lunges are a good exercise for strengthening, sculpting and building several muscles/muscle groups, including the quadriceps (or thighs), the gluteus maximus (or buttocks) as well as the hamstrings. ",
                  image: "img/lunges.png",
                  videos: ["//www.youtube.com/embed/Z2n58m2i4jg"],
                  procedure: "Stand erect with your feet about one shoulder width apart.\
                              Put your hands on your hips, keep your back as straight as possible, relax your shoulders \
                              and keep your eyes facing directly ahead.\
                              Take a large step forward with one leg.\
                              As you step forward, lower your hips and bend your knees until they both form 90 degree angles.\
                              Return to starting position.\
                              Repeat with your alternate leg."
              }),

              duration: 30
          });
        
        //<nn>
        //11. Gyakorlat
        //</nn> 
        workout.excersises.push({
              details: new Excersise({
                  name: "pushupNRotate",
                  title: "Pushup And Rotate",
                  description: "A variation of pushup that requires you to rotate.",
                  image: "img/pushupNRotate.jpg",
                  videos: ["//www.youtube.com/embed/qHQ_E-f5278"],
                  procedure: "Assume the classic pushup position, but as you come up, rotate your body so your right arm lifts up and extends overhead.\
                              Return to the starting position, lower yourself, then push up and rotate till your left hand points toward the ceiling."
              }),
              duration: 30
          });
        
        //<nn>
        //12. Gyakorlat
        //</nn> 
        workout.excersises.push({
              details: new Excersise({
                  name: "sidePlank",
                  title: "Side Plank",
                  description: "A variation to Plank done using one hand only",
                  image: "img/sideplank.png",
                  videos: ["//www.youtube.com/embed/wqzrb67Dwf8", "//www.youtube.com/embed/_rdfjFSFKMY"],
                  procedure: "Lie on your side, in a straight line from head to feet, resting on your forearm.\
                              Your elbow should be directly under your shoulder.\
                              With your abdominals gently contracted, lift your hips off the floor, maintaining the line.\
                              Keep your hips square and your neck in line with your spine. Hold the position."
              }),
              duration: 30
          });
        //<nn>
        //Az edzésterv objektumot vissza kell adni :).
        //</nn>
        return workout;
    };
    
    //<nn>
    //Egy újabb függvény, ami elindítja az alkalmazást:
    //A paraméterként kapott edzéstervet a scope edzéstervévé teszki.
    //Az eltelt időt beállítja 0-ra, majd az $interval segítségével elkezdi számolni az eletelt másodperceket,
    //és másodpercenként növeli a scope eltelt idejét($scope.currentExceriseDuration).
    //</nn>
    var startExcersise = function (excersisePlan) {
        $scope.currentExcersise = excersisePlan;
        $scope.currentExceriseDuration = 0;
        //<nn>
        //Az $interval az angular szolgáltatása:
        //Az első paraméterben adott függvényt hívja meg a második paraméterrel 
        //adott időközönként, a haramadik paraméterben adott alkalom-szor.
        //Vagyis ebben az esetben arról gondoskodik, hogy a workoutplan adott
        //gyakorlatát 30 másodpercig csináljuk ()
        //--------------------------------------------------------------------------
        //Az $interval egy promise-t ad vissza, erre pedig lehet egy, vagy több .then() callback
        //függvényt hívni, ezt használjuk fel itt:
        //
        //</nn>
        $interval(function () {
            $scope.currentExceriseDuration = $scope.currentExceriseDuration + 1;
            //console.log("\$scope.currentExceriseDuration= " + $scope.currentExceriseDuration);
        }, 1000, $scope.currentExcersise.duration).then(function () {
            var next = getNextExcersise(excersisePlan);
            if(next) {
                startExcersise(next);
            }else {
                console.info("Átirányítás a finish-re....");
                $location.path('/finish');
            }
        });
    };
    
    //<SF>
    //Ez a függvény létrehoz egy workoutplan objektumot a createWorkout hívással.
    //Ez a workoutplan tartalmazza már az egyes gyakorlatokat, az 'excersises' tömbjében.
    //A végén pedig meghívja a 
    //</SF>
    var startWorkout = function () {
        workoutPlan = createWorkout();
        $scope.workoutTimeRemaining = workoutPlan.totalWorkoutDuration();
        
        restExcesise = {
            details: new Excersise({
                name: "rest",
                title: "Relax!",
                description: "Relax a bit!",
                image: "img/rest.png"
            }),
            duration: workoutPlan.restBetweenExcersises
        };
        
        //<nn>
        //Másodpercenként frissítjük a hátrlévő idő értékét.
        //</nn>
        $interval( function () {
           $scope.workoutTimeRemaining = $scope.workoutTimeRemaining - 1; 
        }, 1000, $scope.workoutTimeRemaining);
        
        //<nn>
        //A startexcersise függgvényt a 'array.shift()' függvénnyel hívjuk, ami azt jelenti, hogy
        //nemcsak végrehajtatjuk, de ki is vesszük a workoutplan-ból az első excersise elemet.
        //</nn>
        startExcersise(workoutPlan.excersises.shift());
    };
    
    //<nn>
    //E következő gyakorlatra váltáshoz szüksége függvény.
    //A működés lényege, hogy ha éppen pihenés az azktuálsi gyakorlat, 
    //akkor elkezdjük a következőt, ha nem pihenés, akkor a pihenést kezdjük el.
    //<nn>
    var getNextExcersise = function (currentExcersisePlan) {
        var nextExcersise = null;
        if (currentExcersisePlan === restExcesise) {
            nextExcersise = workoutPlan.excersises.shift();
        }else {
            if (workoutPlan.excersises.length != 0) {
                nextExcersise = restExcesise;
            }
        }
        return nextExcersise;
    };
    
    /*
    //<nn>
    //Már csak egy "figyelő" kell, aki meghívja a getNextExcersise fv.-t, amikor eljön az ideje.
    //Ez a $watch azonban elég költséges... helyette a PROMISE API-t fogjuk majd használni.
    //</nn>
    $scope.$watch('currentExceriseDuration', function (nVal) {
        if( nVal == $scope.currentExcersise.duration) {
            var next = getNextExcersise($scope.currentExcersise);
            if (next) {
                startExcersise(next);
            } else {
                console.log("WORKOUT DONE!");
            }
        }
    });
    */
    
    //<nn>
    //Mostantól konvencióként alkalmazzuk ezt az init() függvényt, 
    //minden controllerben, hogy lássuk, hogy hol kezdődik a controller
    //kódjának tényleges végrehajtása.
    //Igazából ez a függvény indítja el az app futását, azzal, hogy, 
    //a definiálása után egyből meg is hívjuk.
    //</nn>
    var init = function () {
        startWorkout();
    };
    init();
}]);








