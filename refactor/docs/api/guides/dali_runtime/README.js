Ext.data.JsonP.dali_runtime({"guide":"<h1 id='dali_runtime-section-dreem-gl---dali-runtime'>Dreem GL - DALi Runtime</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ul>\n<li>1. <a href='#!/guide/dali_runtime-section-getting-started'>Getting Started</a>\n <ul>\n<li>1.1. <a href='#!/guide/dali_runtime-section-prerequisites'>Prerequisites</a>\n </li>\n<li>1.2. <a href='#!/guide/dali_runtime-section-running-dreemgl-applications-in-dali'>Running DreemGL applications in Dali</a>\n </li>\n</ul></li>\n<li>2. <a href='#!/guide/dali_runtime-section-debugging-dali-runtime'>Debugging DALi Runtime</a>\n <ul>\n<li>2.1. <a href='#!/guide/dali_runtime-section-odroid%2Ftizen-performance-logging'>odroid/tizen performance logging</a>\n </li>\n<li>2.2. <a href='#!/guide/dali_runtime-section-dali-debugging-using-dump_scene%2Fstagehand'>Dali debugging using dump_scene/stagehand</a>\n </li>\n<li>2.3. <a href='#!/guide/dali_runtime-section-tracking-down-crashes-or-memory-leaks'>Tracking down crashes or memory leaks</a>\n </li>\n</ul></li>\n</ul></div>\n\n<h2 id='dali_runtime-section-getting-started'>Getting Started</h2>\n\n<h3 id='dali_runtime-section-prerequisites'>Prerequisites</h3>\n\n<ul>\n<li>Ubuntu 14.04 with DALi 1.1.15 or later.</li>\n<li>Odroid XU3 with Tizen 3.0, custom DDK from DALi UK, DALI 1.1.15 or later.</li>\n</ul>\n\n\n<h3 id='dali_runtime-section-running-dreemgl-applications-in-dali'>Running DreemGL applications in Dali</h3>\n\n<p>To launch a DreemGL application in DALi runtime, you need to launch the DreemGL server.js file with some additional command line options, e.g.:</p>\n\n<pre><code class=\"Bash\">node server.js -width 600 -height 600 -dali test/nulltest\n</code></pre>\n\n<p>There is a default folder hard coded into the Dreem</p>\n\n<table>\n<thead>\n<tr>\n<th> Option  </th>\n<th>          </th>\n<th> Description                                                         </th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td> width   </td>\n<td> Optional </td>\n<td> Width of dali stage. default = 1920 pixels </td>\n</tr>\n<tr>\n<td> height  </td>\n<td> Optional </td>\n<td> Height of dali stage. defualt = 1080 pixels </td>\n</tr>\n<tr>\n<td> name    </td>\n<td> Optional </td>\n<td> Window name to display </td>\n</tr>\n<tr>\n<td> dumpprog</td>\n<td> Optional </td>\n<td> Write DALi statements to the console. This can be used to debug a stand-alone DALi application. Each line starts with <code>DALICODE:</code>. </td>\n</tr>\n<tr>\n<td> dali    </td>\n<td> Required </td>\n<td> Location of the dreemgl application to run. This can be the name of a directory containing the application, or the name of a single javascript file (without the <code>.js</code> suffix)</td>\n</tr>\n</tbody>\n</table>\n\n\n<h2 id='dali_runtime-section-debugging-dali-runtime'>Debugging DALi Runtime</h2>\n\n<h3 id='dali_runtime-section-odroid%2Ftizen-performance-logging'>odroid/tizen performance logging</h3>\n\n<p>Enable network debugging in dali builds. Add --enable-networklogging to the build step of dali-adaptor in dali-node-initial-build.sh</p>\n\n<p><code>./configure 'CXXFLAGS=-O0 -g' --enable-gles=20 --enable-profile=UBUNTU --prefix=$DESKTOP_PREFIX --enable-debug --with-node-js=/home/dali/download/node-v0.12.4/deps/uv/include/ --enable-networklogging</code></p>\n\n<p>Before running a dali application:</p>\n\n<p><code>export DALI_LOG_PERFORMANCE_STATS=1</code></p>\n\n<p>In a separate console window run</p>\n\n<p><code>dlogutil node</code></p>\n\n<p><em>From Dali UK Team:</em></p>\n\n<pre><code>When running DALi it will print out this kind of info:\n\nLogMessage(42) &gt; Update, min 0.02 ms, max 0.05 ms, total (0.0 secs), avg 0.02 ms, std dev 0.00 ms\nLogMessage(42) &gt; Render, min 0.27 ms, max 7.76 ms, total (2.6 secs), avg 2.69 ms, std dev 2.52 ms\nLogMessage(42) &gt; Event, min 0.00 ms, max 0.00 ms, total (0.0 secs), avg 0.00 ms, std dev 0.00 ms\n\nWhat does it all mean?  \nUpdate runs our animations / does the scene graph traversal .  Ideally this should take &lt; 1 frame. \nE.g.  &lt; 16ms.  Ideally &lt;8ms to be on the safe side.\nRender does the GL calls / texture uploads.  This again should take &lt;  16ms. Ideally &lt; 8ms, at the \nmoment on Odroid the compositor is on by default, so once we've rendered ( to a texture) it then \nre-renders us to the frame buffer ( may take about 4ms).  In the future we should be able to render \ndirect to the screen.\n\nEvent is where the user sets up the scene / creates animations / handles input events. This can \nbe any amount of time. This is the thread that DreemGL will be running in.\n</code></pre>\n\n<h3 id='dali_runtime-section-dali-debugging-using-dump_scene%2Fstagehand'>Dali debugging using dump_scene/stagehand</h3>\n\n<p>https://dalidocs.ahcox.com/dd/dd7/md_stage-hand.html</p>\n\n<p>Enable debugging in dali builds. If missing, add --enable-debug to the build step of dali-adaptor in dali-node-initial-build.sh</p>\n\n<p>Before running a dali application:\n<code>export DALI_NETWORK_CONTROL=1</code></p>\n\n<p>I often see an error when using stagehand (a network error). I'm more interested in a text dump. For example, on ubuntu (I'm using vmware so the ip address is 0.0.0.0, and not 127.0.0.1).</p>\n\n<p>Run telnet after the dali application is started.\ntelnet 0.0.0.0. 3031\ndump_scene</p>\n\n<p><em>From Dali UK Team:</em></p>\n\n<pre><code class=\"bash\">echo \"dump_scene\" | nc -q 4 localhost  3031  &gt; scene.json &amp;&amp; tail -n +2 scene.json &gt; scene2.json  &amp;&amp;  firefox scene2.json\n-q  4 is to let netcat wait 4 seconds before quitting.\nthe tail is remove the size field, as it's not in JSON format and firefox complains about it.\n</code></pre>\n\n<h3 id='dali_runtime-section-tracking-down-crashes-or-memory-leaks'>Tracking down crashes or memory leaks</h3>\n\n<p>The tools valgrind and gdb can be used to help isolate issues such as crashes and memory leaks.</p>\n\n<h4 id='dali_runtime-section-gdb'>gdb</h4>\n\n<p>gdb should stop running if an error is found. The 'bt' command will show a stack trace.\n<code>\ngdb --args node server.js -width 600 -height 600 -dali test/dalitests/boxes\nr\n</code></p>\n\n<h4 id='dali_runtime-section-valgrind'>valgrind</h4>\n\n<p>This may run slowly so be patient. You can ctrl-C to stop running and see any reported heap leaks.\n<code>\nvalgrind node server.js -width 600 -height 600 -dali test/dalitests/boxes\n</code></p>\n\n<p>Results of running valgrind on the boxes example\n<code>\n==96952== Mismatched free() / delete / delete []\n==96952==    at 0x4C2C2BC: operator delete(void*) (in /usr/lib/valgrind/vgpreload_memcheck-amd64-linux.so)\n==96952==    by 0xBB9C9F: node::After(uv_fs_s*) (in /usr/local/bin/node)\n==96952==    by 0xC1BBAC: uv__work_done (threadpool.c:236)\n==96952==    by 0xC1D985: uv__async_event (async.c:92)\n==96952==    by 0xC1DA62: uv__async_io (async.c:132)\n==96952==    by 0xC2CFBC: uv__io_poll (linux-core.c:324)\n==96952==    by 0xC1E575: uv_run (core.c:324)\n==96952==    by 0xBADA60: node::Start(int, char**) (in /usr/local/bin/node)\n==96952==    by 0x5CA2EC4: (below main) (libc-start.c:287)\n==96952==  Address 0x6262e70 is 0 bytes inside a block of size 504 alloc'd\n==96952==    at 0x4C2B800: operator new[](unsigned long) (in /usr/lib/valgrind/vgpreload_memcheck-amd64-linux.so)\n==96952==    by 0xBBAF6E: node::Stat(v8::FunctionCallbackInfo&lt;v8::Value&gt; const&amp;) (in /usr/local/bin/node)\n==96952==    by 0x7B8581: v8::internal::FunctionCallbackArguments::Call(void (*)(v8::FunctionCallbackInfo&lt;v8::Value&gt; const&amp;)) (in /usr/local/bin/node)\n==96952==    by 0x7D9210: v8::internal::Builtin_HandleApiCall(int, v8::internal::Object**, v8::internal::Isolate*) (in /usr/local/bin/node)\n==96952==    by 0x9327760740D: ???\n==96952==    by 0x9327774157B: ???\n==96952==    by 0x93277659E85: ???\n==96952==    by 0x9327774080A: ???\n==96952==    by 0x93277656F9F: ???\n==96952==    by 0x93277628890: ???\n==96952==    by 0x895D41: v8::internal::Execution::Call(v8::internal::Isolate*, v8::internal::Handle&lt;v8::internal::Object&gt;, v8::internal::Handle&lt;v8::internal::Object&gt;, int, v8::internal::Handle&lt;v8::internal::Object&gt;*, bool) (in /usr/local/bin/node)\n==96952==    by 0xAA4549: v8::internal::Runtime_Apply(int, v8::internal::Object**, v8::internal::Isolate*) (in /usr/local/bin/node)\n==96952==\n==96952==\n==96952== HEAP SUMMARY:\n==96952==     in use at exit: 995,181 bytes in 258 blocks\n==96952==   total heap usage: 28,816 allocs, 28,558 frees, 82,296,524 bytes allocated\n==96952==\n==96952== LEAK SUMMARY:\n==96952==    definitely lost: 0 bytes in 0 blocks\n==96952==    indirectly lost: 0 bytes in 0 blocks\n==96952==      possibly lost: 7,537 bytes in 52 blocks\n==96952==    still reachable: 987,644 bytes in 206 blocks\n==96952==         suppressed: 0 bytes in 0 blocks\n==96952== Rerun with --leak-check=full to see details of leaked memory\n==96952==\n==96952== For counts of detected and suppressed errors, rerun with: -v\n==96952== ERROR SUMMARY: 231 errors from 1 contexts (suppressed: 0 from 0)\n</code></p>\n","title":"DreemGL DALi Runtime Guide"});