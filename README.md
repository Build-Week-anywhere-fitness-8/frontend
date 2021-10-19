# front-end

## CLASSES ENDPOINTS

<br>

POST - Creates a new class

https://anytimefitness.herokuapp.com/api/classes/create

```
{
    "class_name": "Zumba",
    "class_type": "Cardio",
    "class_duration": "60",
    "class_intensity": "Intermediate",
    "class_location": "Lambda Gym",
    "class_max": "10"
}
```

RETURNS

```
{
    "class_id": "1,
    "class_name": "Zumba",
    "class_type": "Cardio",
    "class_duration": "60",
    "class_intensity": "Intermediate",
    "class_location": "Lambda Gym",
    "class_max_attendees": "10
}
```

PUT - Updates the class

https://anytimefitness.herokuapp.com/api/classes/:id

```
{
    "class_name": "Soul Cycle",
    "class_type": "Cardio",
    "class_duration": "120",
    "class_intensity": "Advanced",
    "class_location": "Soul Cycle Chicago",
    "class_max": "20"
}

```

POST - Sign up for a class

https://anytimefitness.herokuapp.com/api/classes/signup

```
{
    "class_id": 1,  // class user is signing up for
    "user_id": 1 // user id of attendee
}
```

GET - Returns a list of all attendees for a certain class

https://anytimefitness.herokuapp.com/api/class/:id

```
{
    "attendees": [
        "George"
    ],
    "total_attendees": 1,
    "class_name": "Zumba"
}
```

GET - Returns all classes

https://anytimefitness.herokuapp.com/api/classes

GET - Returns class by id

https://anytimefitness.herokuapp.com/api/classes/:id

<br>

## USER ENDPOINTS

<br>

GET - Returns all users

https://anytimefitness.herokuapp.com/api/users

GET - Returns individual user

https://anytimefitness.herokuapp.com/api/users/:id

PUT - Updates the user

https://anytimefitness.herokuapp.com/api/users/:id
