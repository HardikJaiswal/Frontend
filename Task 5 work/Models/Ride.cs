﻿using System;
using System.ComponentModel.DataAnnotations;

namespace Models
{
    public class Ride
    {
        [Key]
        public int RideId { get; set; }

        public string? StartLocation { get; set; }

        public string? EndLocation { get; set; }

        public int Seats { get; set; }

        public int Price { get; set; }

        public string? BookingDate { get; set; }

        public int TimeSlot { get; set; }

        public int OwnerId { get; set; }

        public int PassengerId { get; set; }    
    }
}
