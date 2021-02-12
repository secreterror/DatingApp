using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using API.Interface;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Authorize]
    public class UsersController:BaseApiController
    {
        

        private readonly IUserRepo _userRepo;
        private readonly IMapper _mapper;

        public UsersController(IUserRepo userRepo,IMapper mapper){
           _mapper = mapper;
            
           _userRepo=userRepo;
        }
    
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MemberDto>>> GetUsers(){

            var users=await _userRepo.GetUsersAsync();  
            var userToReturn =_mapper.Map<IEnumerable<MemberDto>>(users);

            return Ok(userToReturn);


        }
        [HttpGet("{username}")]
        public async Task<ActionResult<MemberDto>> GetUserAsync(string username){

            var user =await _userRepo.GetUserByUsernameAsync(username);

            return _mapper.Map<MemberDto>(user);
        }
    }
}