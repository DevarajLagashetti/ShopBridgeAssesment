using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ShopBridge.Startup))]
namespace ShopBridge
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
