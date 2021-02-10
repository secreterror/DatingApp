using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BugController:BaseApiController
    {
        private readonly DataContext _context;
        public BugController( DataContext context)
        {
            _context=context;
        }
        [Authorize]
        [HttpGet("auth")]
        
        public ActionResult <string> GetSecret(){

            return "secret_text";

        }
        [HttpGet("not-found")]
        public ActionResult <AppUser> GetNotFound(){
            var things=_context.Users.Find(-1);

            if(things==null) return NotFound();

            return Ok(things);

        }
        

        [HttpGet("server-error")]
        
        public ActionResult <string> GetServerError(){
            var thing=_context.Users.Find(-1);
            var thingToReturn=thing.ToString();

            return thingToReturn;

        }
        [HttpGet("bad-request")]
        
        public ActionResult <string> GetBadRequest(){

            return BadRequest("Bad Request It Is");

        }
        
    }
}