export default function Home() {
  const iconSize = "w-8 h-8";
  return (
    <main className="flex w-screen justify-center items-center">
      <div className="flex flex-col items-center mx-auto gap-8 w-fit max-w-4xl mt-20">
        <div className="flex flex-col gap-1 items-center">
          <h1 className="text-3xl">Konditore Cafe Links</h1>
          <h2 className="text-lg">Survey and Social Media</h2>
        </div>
        <div className="flex flex-col gap-3 rounded-md w-full">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdC4kuE76LYv3G_Y-FFNqot8DFs1_EYELg_Q-4ohcpMA2jwYw/viewform?pli=1"
            target="_blank"
            className="rounded-md bg-white px-3.5 py-2.5 text-lg font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 text-center"
          >
            Feedback Survey for $5 off
          </a>
        </div>
        <div className="flex gap-6 w-5 justify-center">
          <div className="rounded-full flex items-center justify-center ">
            <a
              className="dark:bg-black bg-white fill-[#E1306C]"
              href="https://www.instagram.com/konditoreicafe/"
              target="_blank"
            >
              <svg
                className={`${iconSize}`}
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Instagram</title>
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
              </svg>
            </a>
          </div>
          <div className="rounded-full flex items-center justify-center ">
            <a
              className="dark:bg-black bg-white fill-[#0F9D58]"
              href="https://www.google.com/search?q=konditorei&sxsrf=AB5stBi37XuVbIsxbhKykpPp7pDUYKwifw%3A1689731095255&ei=F0C3ZLiSD-7PkPIPnPqQ-Aw&gs_ssp=eJzj4tZP1zcsSTHKMDGxMGC0UjWosDCwSEs0NTGwTDU0TDFJNrcyqDBNszQySk20NEk1SjVPM7Xw4srOz0vJLMkvSs0EACrhEmc&oq=kondit&gs_lp=Egxnd3Mtd2l6LXNlcnAiBmtvbmRpdCoCCAAyDRAuGK8BGMcBGIoFGCcyBBAjGCcyBxAjGIoFGCcyBRAAGIAEMhAQLhiABBgUGIcCGMcBGK8BMgUQABiABDIIEAAYgAQYsQMyCxAuGIAEGMcBGK8BMgUQABiABDIFEAAYgAQyGhAuGK8BGMcBGIoFGJcFGNwEGN4EGOAE2AEBSPsRUOoEWOgJcAN4AZABAJgBlgGgAecFqgEDMS41uAEByAEA-AEBwgIKEAAYRxjWBBiwA8ICChAAGIoFGLADGEPCAg0QLhiKBRjHARivARgnwgIREC4YgwEYxwEYsQMY0QMYgATCAggQLhiABBixA8ICERAuGIAEGLEDGIMBGMcBGNEDwgITEC4YigUYsQMYgwEYxwEY0QMYCsICERAuGIoFGLEDGIMBGMcBGNEDwgIaEC4YigUYxwEYrwEYlwUY3AQY3gQY4ATYAQHCAgcQABiKBRhDwgIHEC4YigUYQ8ICCBAAGIoFGJECwgINEC4YigUYxwEYrwEYQ8ICChAAGIAEGBQYhwLCAggQLhixAxiABMICBRAuGIAEwgIREC4YgwEYrwEYxwEYsQMYgATiAwQYACBBiAYBkAYKugYGCAEQARgU&sclient=gws-wiz-serp&bshm=lbse/1"
              target="_blank"
            >
              <svg
                className={`${iconSize}`}
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Google</title>
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
              </svg>
            </a>
          </div>
          <div className="rounded-full flex items-center justify-center ">
            <a
              className="dark:bg-black bg-white fill-[#4285F4]"
              href="https://m.facebook.com/people/Konditorei/100075651529329/"
              target="_blank"
            >
              <svg
                className={`${iconSize}`}
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Facebook</title>
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
          <div className="rounded-full flex items-center justify-center ">
            <a
              className="dark:bg-black bg-white fill-[#D32323]"
              href="https://www.yelp.com/biz/konditorei-portola-valley"
              target="_blank"
            >
              <svg
                className={`${iconSize}`}
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Yelp</title>
                <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 0 1 1.596-.206 9.194 9.194 0 0 1 2.364 3.252 1.073 1.073 0 0 1-.686 1.459zm-5.025 3.152l4.942 1.606a1.072 1.072 0 0 1 .636 1.48 9.316 9.316 0 0 1-2.47 3.169 1.073 1.073 0 0 1-1.592-.26l-2.76-4.409c-.528-.847.288-1.894 1.236-1.584zm-4.796-4.368L5.454 2.916a1.072 1.072 0 0 1 .466-1.5A14.973 14.973 0 0 1 11.184.003a1.07 1.07 0 0 1 1.153 1.068v9.768c0 1.096-1.45 1.483-1.998.535zm-.857 4.17L4.44 16.806a1.073 1.073 0 0 1-1.324-.92 9.218 9.218 0 0 1 .43-3.997 1.07 1.07 0 0 1 1.485-.62l4.668 2.279c.9.438.763 1.76-.207 2zm.886 1.477c.669-.744 1.901-.246 1.866.752l-.19 5.188a1.073 1.073 0 0 1-1.247 1.02 9.314 9.314 0 0 1-3.722-1.502 1.072 1.072 0 0 1-.187-1.6l3.477-3.864z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
