using System;

namespace API.Extension
{
    public static class AgeExtension
    {
        public static int CalculatAge(this DateTime dob){

            var today=DateTime.Today;
            var age=today.Year-dob.Year;

            if(dob.Date>today.AddYears(-age))
            age--;

            return age;

        }
        
    }
}