using Microsoft.AspNetCore.Mvc;
using FirstAspNetCoreApp.ViewModels;
using FirstAspNetCoreApp.Services;

namespace FirstAspNetCoreApp.Controllers.Web
{
    public class AppController : Controller
    {
        private IMailService _mailService;
        public AppController(IMailService mailService)
        {
            _mailService = mailService;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Contact()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Contact(ContactViewModel model)
        {
            return View();
        }

        public IActionResult About()
        {
            return View();
        }
    }
}
