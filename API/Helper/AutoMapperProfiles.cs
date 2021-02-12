
using System.Linq;
using API.Data;
using API.DTO;
using API.Entities;
using AutoMapper;

namespace API.Helper
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {   
            CreateMap<AppUser,MemberDto>()
            .ForMember(dest=>dest.PhotoUrl,opt=>opt.MapFrom(src=>src.Blogs.FirstOrDefault(x=>x.isMain).Url));
            
            CreateMap<Blog,BlogDto>();
        }
    }
}