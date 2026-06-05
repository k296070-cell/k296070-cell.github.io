// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "* indicates equal contribution",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "awards-military-ai-contest-4th-prize-from-ministry-of-national-defense-amp-amp-ministry-of-science-and-ict-achieved-1st-place-in-the-preliminary-rounds-for-satellite-image-recognition",
          title: 'Military AI Contest 4th prize from Ministry of National Defense &amp;amp;amp; Ministry of...',
          description: "",
          section: "Awards",},{id: "awards-since-august-2023-i-ve-been-receiving-a-merit-based-tuition-scholarship-every-semester-from-the-department-of-electrical-and-computer-engineering-at-seoul-national-university",
          title: 'Since August 2023, I’ve been receiving a merit-based tuition scholarship every semester from...',
          description: "",
          section: "Awards",},{id: "awards-i-ve-been-selected-for-the-semiconductor-specialization-scholarship-krw-15-000-000-offered-by-a-government-supported-association-focused-on-semiconductors-it-provides-funding-for-overseas-study-and-offers-additional-support-based-on-my-achievements-upon-graduation-during-the-selection-process-i-received-the-highest-tier-of-the-initial-award-which-was-granted-through-comprehensive-evaluation",
          title: 'I’ve been selected for the Semiconductor Specialization Scholarship KRW 15,000,000, offered by a...',
          description: "",
          section: "Awards",},{id: "awards-accelerator-programming-winter-school-advanced-class-1st-prize-from-snu-thunder-research-group-the-prize-was-a-10th-generation-ipad-which-my-younger-sister-is-now-happily-using-presentation",
          title: 'Accelerator Programming Winter School Advanced Class 1st prize from SNU Thunder Research Group....',
          description: "",
          section: "Awards",},{id: "awards-grand-prize-1st-place-2025-ai-chip-contest-npu-optimization-track-from-the-ministry-of-science-and-ict-msit-republic-of-korea-the-prize-amount-was-krw-10-000-000-presentation",
          title: 'Grand Prize (1st Place), 2025 AI Chip Contest - NPU Optimization Track from...',
          description: "",
          section: "Awards",},{id: "news-excited-to-share-that-our-icml-39-25-submission-flashtp-is-currently-under-consideration-for-a-spotlight-or-oral-presentation-also-it-has-already-been-successfully-deployed-in-real-world-industrial-applications",
          title: 'Excited to share that our ICML&amp;#39;25 submission, FlashTP, is currently under consideration for...',
          description: "",
          section: "News",},{id: "news-our-decdec-has-been-accepted-to-osdi-39-25",
          title: 'Our DecDEC has been accepted to OSDI&amp;#39;25!',
          description: "",
          section: "News",},{id: "news-our-team-won-the-grand-prize-1st-place-at-the-2025-ai-chip-contest-npu-optimization-track-hosted-by-the-ministry-of-science-and-ict-msit-republic-of-korea-receiving-a-prize-of-krw-10-000-000",
          title: 'Our team won the Grand Prize (1st Place) at the 2025 AI Chip...',
          description: "",
          section: "News",},{id: "news-our-work-agenticcache-a-cache-driven-asynchronous-planning-system-for-embodied-ai-agents-has-been-accepted-to-mlsys-39-26-thank-you-thierry-and-yuheng",
          title: 'Our work AgenticCache, a cache-driven asynchronous planning system for embodied AI agents, has...',
          description: "",
          section: "News",},{id: "projects-ranked-1st-based-on-throughput-and-task-completion-time-optimized-performance-by-addressing-memory-and-compute-bottlenecks-1-implemented-multi-bank-memory-to-fetch-data-in-parallel-resolving-memory-bound-issues-2-used-multiple-output-stationary-systolic-arrays-to-boost-compute-throughput-and-3-pipelined-the-load-and-compute-states-to-enable-memory-preloading-video-report-in-korean",
          title: 'Ranked 1st based on throughput and task completion time. Optimized performance by addressing...',
          description: "",
          section: "Projects",},{id: "projects-built-a-memory-hierarchy-simulator-featuring-l1-and-l2-write-back-caches-and-a-main-memory-backend-implemented-queue-based-cache-access-logic-input-output-fill-write-back-and-modeled-realistic-memory-behaviors-including-dirty-evictions-and-fill-handling-integrated-miss-status-holding-registers-mshrs-to-track-in-flight-requests-and-ensure-correct-non-blocking-memory-accesses-report",
          title: 'Built a memory hierarchy simulator featuring L1 and L2 write-back caches and a...',
          description: "",
          section: "Projects",},{id: "projects-developed-a-fully-pipelined-risc-v-processor-and-integrated-branch-prediction-hardware-including-both-gshare-and-perceptron-predictors-designed-next-pc-selection-logic-and-branch-target-buffer-btb-to-support-high-performance-speculative-execution-report",
          title: 'Developed a fully pipelined RISC-V processor and integrated branch prediction hardware including both...',
          description: "",
          section: "Projects",},{id: "projects-built-a-full-path-indexed-file-system-with-hash-based-lookup-achieving-24x-faster-file-access-by-replacing-linear-scans-with-a-stack-based-approach-to-efficiently-find-executable-process-leaderboard-i-m-rexxx-report",
          title: 'Built a full-path indexed file system with hash-based lookup, achieving 24x faster file...',
          description: "",
          section: "Projects",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
