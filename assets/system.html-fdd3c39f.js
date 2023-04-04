import{_ as t,W as o,X as p,a0 as n,a1 as e,Z as i,$ as s,C as c}from"./framework-afce0fe7.js";const l="/Computer-Science-Learn-Notes/assets/image-20220404173153591-d4c5ab0c.png",r="/Computer-Science-Learn-Notes/assets/image-20220627104731025-6c3df5c6.png",d="/Computer-Science-Learn-Notes/assets/image-20220627104743508-8d639a80.png",g="/Computer-Science-Learn-Notes/assets/image-20220702133239391-a19542a1.png",u="/Computer-Science-Learn-Notes/assets/image-20220702133308560-b3110c13.png",k="/Computer-Science-Learn-Notes/assets/image-20220702133318801-84e28b99.png",h="/Computer-Science-Learn-Notes/assets/image-20220702133411785-03d68437.png",m="/Computer-Science-Learn-Notes/assets/image-20220731143809167-e631d60a.png",f="/Computer-Science-Learn-Notes/assets/image-20220717161851452-e198dbc6.png",b="/Computer-Science-Learn-Notes/assets/image-20220717163910297-723746bc.png",C="/Computer-Science-Learn-Notes/assets/image-20220717163933495-92b2f3d9.png",v="/Computer-Science-Learn-Notes/assets/image-20220717165055763-460c4ac9.png",P="/Computer-Science-Learn-Notes/assets/image-20220717165140152-095d4b3b.png",S="/Computer-Science-Learn-Notes/assets/image-20220717165148621-b0f31e3b.png",_={},I=s('<h2 id="💻操作系统" tabindex="-1"><a class="header-anchor" href="#💻操作系统" aria-hidden="true">#</a> 💻操作系统</h2><h3 id="什么是协程" tabindex="-1"><a class="header-anchor" href="#什么是协程" aria-hidden="true">#</a> 什么是协程？</h3><p>协程是一种用户态的轻量级线程。</p><p>协程不是由操作系统内核管理，而是完全由用户程序所控制，这样带来的好处就是性能得到了很大的提升，不会像线程切换那样消耗资源。</p><p>协程可以理解为可以暂停执行的函数。它拥有自己的寄存器上下文和栈。协程调度切换时，将寄存器上下文和栈保存到其他地方，在切回来的时候，恢复先前保存的寄存器上下文和栈，直接操作栈则基本没有内核切换的开销，可以不加锁的访问全局变量，所以上下文的切换非常快。</p><h3 id="进程和线程的区别" tabindex="-1"><a class="header-anchor" href="#进程和线程的区别" aria-hidden="true">#</a> 进程和线程的区别</h3><p>👨‍💻<strong>面试官</strong>: 好的！我明白了！那你再说一下： <strong>进程和线程的区别</strong>。</p><p>🙋 <strong>我：</strong> 好的！ 下图是 Java 内存区域，我们从 JVM 的角度来说一下线程和进程之间的关系吧！</p><figure><img src="'+l+'" alt="image-20220626201137158" tabindex="0" loading="lazy"><figcaption>image-20220626201137158</figcaption></figure><p>从上图可以看出：一个进程中可以有多个线程，多个线程共享进程的<strong>堆</strong>和**方法区 (JDK1.8 之后的元空间)*<em>资源，但是每个线程有自己的*<em>程序计数器</em></em>、<strong>虚拟机栈</strong> 和 <strong>本地方法栈</strong>。</p><p><strong>总结：</strong> 线程是进程划分成的更小的运行单位,一个进程在其执行的过程中可以产生多个线程。线程和进程最大的不同在于基本上各进程是独立的，而各线程则不一定，因为同一进程中的线程极有可能会相互影响。线程执行开销小，但不利于资源的管理和保护；而进程正相反。</p><h3 id="进程有哪几种状态" tabindex="-1"><a class="header-anchor" href="#进程有哪几种状态" aria-hidden="true">#</a> 进程有哪几种状态?</h3><p>👨‍💻<strong>面试官</strong> ： 那你再说说<strong>进程有哪几种状态?</strong></p><p>🙋 <strong>我</strong> ：我们一般把进程大致分为 5 种状态，这一点和线程很像！</p><ul><li><strong>创建状态(new)</strong> ：进程正在被创建，尚未到就绪状态。</li><li><strong>就绪状态(ready)</strong> ：进程已处于准备运行状态，即进程获得了除了处理器之外的一切所需资源，一旦得到处理器资源(处理器分配的时间片)即可运行。</li><li><strong>运行状态(running)</strong> ：进程正在处理器上上运行(单核 CPU 下任意时刻只有一个进程处于运行状态)。</li><li><strong>阻塞状态(waiting)</strong> ：又称为等待状态，进程正在等待某一事件而暂停运行如等待某资源为可用或等待 IO 操作完成。即使处理器空闲，该进程也不能运行。</li><li><strong>结束状态(terminated)</strong> ：进程正在从系统中消失。可能是进程正常结束或其他原因中断退出运行。</li></ul><h3 id="进程间的通信方式" tabindex="-1"><a class="header-anchor" href="#进程间的通信方式" aria-hidden="true">#</a> 进程间的通信方式</h3><p>👨‍💻<strong>面试官</strong> ：<strong>进程间的通信常见的的有哪几种方式呢?</strong></p><p>🙋 <strong>我</strong> ：大概有 7 种常见的进程间的通信方式。</p>',18),x={href:"https://www.jianshu.com/p/c1015f5ffa74",target:"_blank",rel:"noopener noreferrer"},w=s('<ol><li><strong>管道/匿名管道(Pipes)</strong> ：用于具有亲缘关系的父子进程间或者兄弟进程之间的通信。</li><li><strong>有名管道(Names Pipes)</strong> : 匿名管道由于没有名字，只能用于亲缘关系的进程间通信。为了克服这个缺点，提出了有名管道。有名管道严格遵循<strong>先进先出(first in first out)</strong>。有名管道以磁盘文件的方式存在，可以实现本机任意两个进程通信。</li><li><strong>信号(Signal)</strong> ：信号是一种比较复杂的通信方式，用于通知接收进程某个事件已经发生；</li><li><strong>消息队列(Message Queuing)</strong> ：消息队列是消息的链表,具有特定的格式,存放在内存中并由消息队列标识符标识。管道和消息队列的通信数据都是先进先出的原则。与管道（无名管道：只存在于内存中的文件；命名管道：存在于实际的磁盘介质或者文件系统）不同的是消息队列存放在内核中，只有在内核重启(即，操作系统重启)或者显式地删除一个消息队列时，该消息队列才会被真正的删除。消息队列可以实现消息的随机查询,消息不一定要以先进先出的次序读取,也可以按消息的类型读取.比 FIFO 更有优势。<strong>消息队列克服了信号承载信息量少，管道只能承载无格式字 节流以及缓冲区大小受限等缺点。</strong></li><li><strong>信号量(Semaphores)</strong> ：信号量是一个计数器，用于多进程对共享数据的访问，信号量的意图在于进程间同步。这种通信方式主要用于解决与同步相关的问题并避免竞争条件。</li><li><strong>共享内存(Shared memory)</strong> ：使得多个进程可以访问同一块内存空间，不同进程可以及时看到对方进程中对共享内存中数据的更新。这种方式需要依靠某种同步操作，如互斥锁和信号量等。可以说这是最有用的进程间通信方式。</li><li><strong>套接字(Sockets)</strong> : 此方法主要用于在客户端和服务器之间通过网络进行通信。套接字是支持 TCP/IP 的网络通信的基本操作单元，可以看做是不同主机之间的进程进行双向通信的端点，简单的说就是通信的两方的一种约定，用套接字中的相关函数来完成通信过程。</li></ol><h3 id="线程间的同步的方式" tabindex="-1"><a class="header-anchor" href="#线程间的同步的方式" aria-hidden="true">#</a> 线程间的同步的方式</h3><p>👨‍💻<strong>面试官</strong> ：<strong>那线程间的同步的方式有哪些呢?</strong></p><p>🙋 <strong>我</strong> ：线程同步是两个或多个共享关键资源的线程的并发执行。应该同步线程以避免关键的资源使用冲突。操作系统一般有下面三种线程同步的方式：</p><ol><li><strong>互斥量(Mutex)</strong>：采用互斥对象机制，只有拥有互斥对象的线程才有访问公共资源的权限。因为互斥对象只有一个，所以可以保证公共资源不会被多个线程同时访问。比如 Java 中的 synchronized 关键词和各种 Lock 都是这种机制。</li><li><strong>信号量(Semaphore)</strong> ：它允许同一时刻多个线程访问同一资源，但是需要控制同一时刻访问此资源的最大线程数量。</li><li><strong>事件(Event)</strong> :Wait/Notify：通过通知操作的方式来保持多线程同步，还可以方便的实现多线程优先级的比较操作</li></ol><h3 id="进程的调度算法" tabindex="-1"><a class="header-anchor" href="#进程的调度算法" aria-hidden="true">#</a> 进程的调度算法</h3><p>👨‍💻<strong>面试官</strong> ：<strong>你知道操作系统中进程的调度算法有哪些吗?</strong></p><p>🙋 <strong>我</strong> ：嗯嗯！这个我们大学的时候学过，是一个很重要的知识点！</p><p>为了确定首先执行哪个进程以及最后执行哪个进程以实现最大 CPU 利用率，计算机科学家已经定义了一些算法，它们是：</p><ul><li><strong>先到先服务(FCFS)调度算法</strong> : 从就绪队列中选择一个最先进入该队列的进程为之分配资源，使它立即执行并一直执行到完成或发生某事件而被阻塞放弃占用 CPU 时再重新调度。</li><li><strong>短作业优先(SJF)的调度算法</strong> : 从就绪队列中选出一个估计运行时间最短的进程为之分配资源，使它立即执行并一直执行到完成或发生某事件而被阻塞放弃占用 CPU 时再重新调度。</li><li><strong>时间片轮转调度算法</strong> : 时间片轮转调度是一种最古老，最简单，最公平且使用最广的算法，又称 RR(Round robin)调度。每个进程被分配一个时间段，称作它的时间片，即该进程允许运行的时间。</li><li><strong>多级反馈队列调度算法</strong> ：前面介绍的几种进程调度的算法都有一定的局限性。如<strong>短进程优先的调度算法，仅照顾了短进程而忽略了长进程</strong> 。多级反馈队列调度算法既能使高优先级的作业得到响应又能使短作业（进程）迅速完成。，因而它是目前<strong>被公认的一种较好的进程调度算法</strong>，UNIX 操作系统采取的便是这种调度算法。</li><li><strong>优先级调度</strong> ： 为每个流程分配优先级，首先执行具有最高优先级的进程，依此类推。具有相同优先级的进程以 FCFS 方式执行。可以根据内存要求，时间要求或任何其他资源要求来确定优先级。</li></ul><h3 id="什么是死锁" tabindex="-1"><a class="header-anchor" href="#什么是死锁" aria-hidden="true">#</a> 什么是死锁</h3><p>👨‍💻<strong>面试官</strong> ：<strong>你知道什么是死锁吗?</strong></p><p>🙋 <strong>我</strong> ：死锁描述的是这样一种情况：多个进程/线程同时被阻塞，它们中的一个或者全部都在等待某个资源被释放。由于进程/线程被无限期地阻塞，因此程序不可能正常终止。</p><h3 id="死锁的四个条件" tabindex="-1"><a class="header-anchor" href="#死锁的四个条件" aria-hidden="true">#</a> 死锁的四个条件</h3><p>👨‍💻<strong>面试官</strong> ：<strong>产生死锁的四个必要条件是什么?</strong></p><p>🙋 <strong>我</strong> ：如果系统中以下四个条件同时成立，那么就能引起死锁：</p><ul><li><strong>互斥</strong>：资源必须处于非共享模式，即一次只有一个进程可以使用。如果另一进程申请该资源，那么必须等待直到该资源被释放为止。</li><li><strong>占有并等待</strong>：一个进程至少应该占有一个资源，并等待另一资源，而该资源被其他进程所占有。</li><li><strong>非抢占</strong>：资源不能被抢占。只能在持有资源的进程完成任务后，该资源才会被释放。</li><li><strong>循环等待</strong>：有一组等待进程 <code>{P0, P1,..., Pn}</code>， <code>P0</code> 等待的资源被 <code>P1</code> 占有，<code>P1</code> 等待的资源被 <code>P2</code> 占有，......，<code>Pn-1</code> 等待的资源被 <code>Pn</code> 占有，<code>Pn</code> 等待的资源被 <code>P0</code> 占有。</li></ul><h3 id="零拷贝深入浅出" tabindex="-1"><a class="header-anchor" href="#零拷贝深入浅出" aria-hidden="true">#</a> ⭐零拷贝深入浅出</h3><h4 id="dma" tabindex="-1"><a class="header-anchor" href="#dma" aria-hidden="true">#</a> DMA</h4><p>在没有 DMA 技术前，I/O 的过程是这样的：</p><ul><li>CPU 发出对应的指令给磁盘控制器，然后返回；</li><li>磁盘控制器收到指令后，于是就开始准备数据，会把数据放入到磁盘控制器的内部缓冲区中，然后产生一个<strong>中断</strong>；</li><li>CPU 收到中断信号后，停下手头的工作，接着把磁盘控制器的缓冲区的数据一次一个字节地读进自己的寄存器，然后再把寄存器里的数据写入到内存，而在数据传输的期间 CPU 是无法执行其他任务的。</li></ul><p>为了方便你理解，我画了一副图：</p><figure><img src="'+r+'" alt="image-20220702132804386" tabindex="0" loading="lazy"><figcaption>image-20220702132804386</figcaption></figure><p>可以看到，整个数据的传输过程，都要需要 CPU 亲自参与搬运数据的过程，而且这个过程，CPU 是不能做其他事情的。</p><p>简单的搬运几个字符数据那没问题，但是如果我们用千兆网卡或者硬盘传输大量数据的时候，都用 CPU 来搬运的话，肯定忙不过来。</p><p>计算机科学家们发现了事情的严重性后，于是就发明了 DMA 技术，也就是<strong>直接内存访问（*Direct Memory Access*）</strong> 技术。</p><p>什么是 DMA 技术？简单理解就是，<strong>在进行 I/O 设备和内存的数据传输的时候，数据搬运的工作全部交给 DMA 控制器，而 CPU 不再参与任何与数据搬运相关的事情，这样 CPU 就可以去处理别的事务</strong>。</p><p>那使用 DMA 控制器进行数据传输的过程究竟是什么样的呢？下面我们来具体看看。</p><figure><img src="'+d+`" alt="image-20220702132824828" tabindex="0" loading="lazy"><figcaption>image-20220702132824828</figcaption></figure><p>具体过程：</p><ul><li>用户进程调用 read 方法，向操作系统发出 I/O 请求，请求读取数据到自己的内存缓冲区中，进程进入阻塞状态；</li><li>操作系统收到请求后，进一步将 I/O 请求发送 DMA，然后让 CPU 执行其他任务；</li><li>DMA 进一步将 I/O 请求发送给磁盘；</li><li>磁盘收到 DMA 的 I/O 请求，把数据从磁盘读取到磁盘控制器的缓冲区中，当磁盘控制器的缓冲区被读满后，向 DMA 发起中断信号，告知自己缓冲区已满；</li><li><strong>DMA 收到磁盘的信号，将磁盘控制器缓冲区中的数据拷贝到内核缓冲区中，此时不占用 CPU，CPU 可以执行其他任务</strong>；</li><li>当 DMA 读取了足够多的数据，就会发送中断信号给 CPU；</li><li>CPU 收到 DMA 的信号，知道数据已经准备好，于是将数据从内核拷贝到用户空间，系统调用返回；</li></ul><p>可以看到， 整个数据传输的过程，CPU 不再参与数据搬运的工作，而是全程由 DMA 完成，但是 CPU 在这个过程中也是必不可少的，因为传输什么数据，从哪里传输到哪里，都需要 CPU 来告诉 DMA 控制器。</p><p>早期 DMA 只存在在主板上，如今由于 I/O 设备越来越多，数据传输的需求也不尽相同，所以每个 I/O 设备里面都有自己的 DMA 控制器</p><h4 id="如何实现零拷贝" tabindex="-1"><a class="header-anchor" href="#如何实现零拷贝" aria-hidden="true">#</a> 如何实现零拷贝？</h4><p>零拷贝技术实现的方式通常有 2 种：</p><ul><li>mmap + write</li><li>sendfile</li></ul><p>下面就谈一谈，它们是如何减少「上下文切换」和「数据拷贝」的次数。</p><h4 id="mmap-write" tabindex="-1"><a class="header-anchor" href="#mmap-write" aria-hidden="true">#</a> mmap + write</h4><p>在前面我们知道，<code>read()</code> 系统调用的过程中会把内核缓冲区的数据拷贝到用户的缓冲区里，于是为了减少这一步开销，我们可以用 <code>mmap()</code> 替换 <code>read()</code> 系统调用函数。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>buf <span class="token operator">=</span> <span class="token function">mmap</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">write</span><span class="token punctuation">(</span>sockfd<span class="token punctuation">,</span> buf<span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>mmap()</code> 系统调用函数会直接把内核缓冲区里的数据「<strong>映射</strong>」到用户空间，这样，操作系统内核与用户空间就不需要再进行任何的数据拷贝操作。</p><figure><img src="`+g+`" alt="image-20220702133239391" tabindex="0" loading="lazy"><figcaption>image-20220702133239391</figcaption></figure><p>具体过程如下：</p><ul><li>应用进程调用了 <code>mmap()</code> 后，DMA 会把磁盘的数据拷贝到内核的缓冲区里。接着，应用进程跟操作系统内核「共享」这个缓冲区；</li><li>应用进程再调用 <code>write()</code>，操作系统直接将内核缓冲区的数据拷贝到 socket 缓冲区中，这一切都发生在内核态，由 CPU 来搬运数据；</li><li>最后，把内核的 socket 缓冲区里的数据，拷贝到网卡的缓冲区里，这个过程是由 DMA 搬运的。</li></ul><p>我们可以得知，通过使用 <code>mmap()</code> 来代替 <code>read()</code>， 可以减少一次数据拷贝的过程。</p><p>但这还不是最理想的零拷贝，因为仍然需要通过 CPU 把内核缓冲区的数据拷贝到 socket 缓冲区里，而且仍然需要 4 次上下文切换，因为系统调用还是 2 次。</p><h4 id="sendfile" tabindex="-1"><a class="header-anchor" href="#sendfile" aria-hidden="true">#</a> sendfile</h4><p>在 Linux 内核版本 2.1 中，提供了一个专门发送文件的系统调用函数 <code>sendfile()</code>，函数形式如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;sys/socket.h&gt;</span></span>
<span class="token class-name">ssize_t</span> <span class="token function">sendfile</span><span class="token punctuation">(</span><span class="token keyword">int</span> out_fd<span class="token punctuation">,</span> <span class="token keyword">int</span> in_fd<span class="token punctuation">,</span> <span class="token class-name">off_t</span> <span class="token operator">*</span>offset<span class="token punctuation">,</span> <span class="token class-name">size_t</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>它的前两个参数分别是目的端和源端的文件描述符，后面两个参数是源端的偏移量和复制数据的长度，返回值是实际复制数据的长度。</p><p>首先，它可以替代前面的 <code>read()</code> 和 <code>write()</code> 这两个系统调用，这样就可以减少一次系统调用，也就减少了 2 次上下文切换的开销。</p><p>其次，该系统调用，可以直接把内核缓冲区里的数据拷贝到 socket 缓冲区里，不再拷贝到用户态，这样就只有 2 次上下文切换，和 3 次数据拷贝。如下图：</p><figure><img src="`+u+`" alt="image-20220702133308560" tabindex="0" loading="lazy"><figcaption>image-20220702133308560</figcaption></figure><p>但是这还不是真正的零拷贝技术，如果网卡支持 SG-DMA（<em>The Scatter-Gather Direct Memory Access</em>）技术（和普通的 DMA 有所不同），我们可以进一步减少通过 CPU 把内核缓冲区里的数据拷贝到 socket 缓冲区的过程。</p><p>你可以在你的 Linux 系统通过下面这个命令，查看网卡是否支持 scatter-gather 特性：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ethtool</span> <span class="token parameter variable">-k</span> eth0 <span class="token operator">|</span> <span class="token function">grep</span> scatter-gather
scatter-gather: on
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>于是，从 Linux 内核 <code>2.4</code> 版本开始起，对于支持网卡支持 SG-DMA 技术的情况下， <code>sendfile()</code> 系统调用的过程发生了点变化，具体过程如下：</p><ul><li>第一步，通过 DMA 将磁盘上的数据拷贝到内核缓冲区里；</li><li>第二步，缓冲区描述符和数据长度传到 socket 缓冲区，这样网卡的 SG-DMA 控制器就可以直接将内核缓存中的数据拷贝到网卡的缓冲区里，此过程不需要将数据从操作系统内核缓冲区拷贝到 socket 缓冲区中，这样就减少了一次数据拷贝；</li></ul><p>所以，这个过程之中，只进行了 2 次数据拷贝，如下图：</p><figure><img src="`+k+`" alt="image-20220702133318801" tabindex="0" loading="lazy"><figcaption>image-20220702133318801</figcaption></figure><p>这就是所谓的<strong>零拷贝（*Zero-copy*）技术，因为我们没有在内存层面去拷贝数据，也就是说全程没有通过 CPU 来搬运数据，所有的数据都是通过 DMA 来进行传输的。</strong>。</p><p>零拷贝技术的文件传输方式相比传统文件传输的方式，减少了 2 次上下文切换和数据拷贝次数，<strong>只需要 2 次上下文切换和数据拷贝次数，就可以完成文件的传输，而且 2 次的数据拷贝过程，都不需要通过 CPU，2 次都是由 DMA 来搬运。</strong></p><p>所以，总体来看，<strong>零拷贝技术可以把文件传输的性能提高至少一倍以上</strong></p><h4 id="使用零拷贝技术的项目" tabindex="-1"><a class="header-anchor" href="#使用零拷贝技术的项目" aria-hidden="true">#</a> 使用零拷贝技术的项目</h4><p>事实上，Kafka 这个开源项目，就利用了「零拷贝」技术，从而大幅提升了 I/O 的吞吐率，这也是 Kafka 在处理海量数据为什么这么快的原因之一。</p><p>如果你追溯 Kafka 文件传输的代码，你会发现，最终它调用了 Java NIO 库里的 <code>transferTo</code> 方法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Overridepublic</span> 
<span class="token keyword">long</span> <span class="token function">transferFrom</span><span class="token punctuation">(</span><span class="token class-name">FileChannel</span> fileChannel<span class="token punctuation">,</span> <span class="token keyword">long</span> position<span class="token punctuation">,</span> <span class="token keyword">long</span> count<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span> 
    <span class="token keyword">return</span> fileChannel<span class="token punctuation">.</span><span class="token function">transferTo</span><span class="token punctuation">(</span>position<span class="token punctuation">,</span> count<span class="token punctuation">,</span> socketChannel<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果 Linux 系统支持 <code>sendfile()</code> 系统调用，那么 <code>transferTo()</code> 实际上最后就会使用到 <code>sendfile()</code> 系统调用函数。</p><p>曾经有大佬专门写过程序测试过，在同样的硬件条件下，传统文件传输和零拷拷贝文件传输的性能差异，你可以看到下面这张测试数据图，使用了零拷贝能够缩短 <code>65%</code> 的时间，大幅度提升了机器传输数据的吞吐量。</p><figure><img src="`+h+`" alt="image-20220702133411785" tabindex="0" loading="lazy"><figcaption>image-20220702133411785</figcaption></figure><p>另外，Nginx 也支持零拷贝技术，一般默认是开启零拷贝技术，这样有利于提高文件传输的效率，是否开启零拷贝技术的配置如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http {
...
    sendfile on
...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>sendfile 配置的具体意思:</p><ul><li>设置为 on 表示，使用零拷贝技术来传输文件：sendfile ，这样只需要 2 次上下文切换，和 2 次数据拷贝。</li><li>设置为 off 表示，使用传统的文件传输技术：read + write，这时就需要 4 次上下文切换，和 4 次数据拷贝。</li></ul><p>当然，要使用 sendfile，Linux 内核版本必须要 2.1 以上的版本。</p><h4 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h4><p>早期 I/O 操作，内存与磁盘的数据传输的工作都是由 CPU 完成的，而此时 CPU 不能执行其他任务，会特别浪费 CPU 资源。</p><p>于是，为了解决这一问题，DMA 技术就出现了，每个 I/O 设备都有自己的 DMA 控制器，通过这个 DMA 控制器，CPU 只需要告诉 DMA 控制器，我们要传输什么数据，从哪里来，到哪里去，就可以放心离开了。后续的实际数据传输工作，都会由 DMA 控制器来完成，CPU 不需要参与数据传输的工作。</p><p>传统 IO 的工作方式，从硬盘读取数据，然后再通过网卡向外发送，我们需要进行 4 上下文切换，和 4 次数据拷贝，其中 2 次数据拷贝发生在内存里的缓冲区和对应的硬件设备之间，这个是由 DMA 完成，另外 2 次则发生在内核态和用户态之间，这个数据搬移工作是由 CPU 完成的。</p><p>为了提高文件传输的性能，于是就出现了零拷贝技术，它通过一次系统调用（<code>sendfile</code> 方法）合并了磁盘读取与网络发送两个操作，降低了上下文切换次数。另外，拷贝数据都是发生在内核中的，天然就降低了数据拷贝的次数。</p><p>Kafka 和 Nginx 都有实现零拷贝技术，这将大大提高文件传输的性能。</p><p>零拷贝技术是基于 PageCache 的，PageCache 会缓存最近访问的数据，提升了访问缓存数据的性能，同时，为了解决机械硬盘寻址慢的问题，它还协助 I/O 调度算法实现了 IO 合并与预读，这也是顺序读比随机读性能好的原因。这些优势，进一步提升了零拷贝的性能。</p><p>需要注意的是，零拷贝技术是不允许进程对文件内容作进一步的加工的，比如压缩数据再发送。</p><p>另外，当传输大文件时，不能使用零拷贝，因为可能由于 PageCache 被大文件占据，而导致「热点」小文件无法利用到 PageCache，并且大文件的缓存命中率不高，这时就需要使用「异步 IO + 直接 IO 」的方式。</p><p>在 Nginx 里，可以通过配置，设定一个文件大小阈值，针对大文件使用异步 IO 和直接 IO，而对小文件使用零拷贝。</p><h3 id="僵尸进程和孤儿进程" tabindex="-1"><a class="header-anchor" href="#僵尸进程和孤儿进程" aria-hidden="true">#</a> 僵尸进程和孤儿进程</h3><h4 id="僵尸进程" tabindex="-1"><a class="header-anchor" href="#僵尸进程" aria-hidden="true">#</a> 僵尸进程</h4><p>一个子进程结束后，它的父进程并没有等待它（调用wait或者waitpid），那么这个子进程将成为一个僵尸进程。僵尸进程是一个已经死亡的进程，但是并没有真正被销毁。它已经放弃了几乎所有内存空间，没有任何可执行代码，也不能被调度，仅仅在进程表中保留一个位置，记载该进程的进程ID、终止状态以及资源利用信息(CPU时间，内存使用量等等)供父进程收集，除此之外，僵尸进程不再占有任何内存空间。这个僵尸进程可能会一直留在系统中直到系统重启。</p><blockquote><p>《百度百科》解释：僵尸进程是当子进程比父进程先结束，而父进程又没有回收子进程，释放子进程占用的资源，此时子进程将成为一个僵尸进程。如果父进程先退出 ，子进程被init接管，子进程退出后init会回收其占用的相关资源</p></blockquote><p>危害：占用进程号，而系统所能使用的进程号是有限的；占用内存。</p><p>以下情况不会产生僵尸进程：</p><ul><li>该进程的父进程先结束了。每个进程结束的时候，系统都会扫描是否存在子进程，如果有则用Init进程接管，成为该进程的父进程，并且会调用wait等待其结束。</li><li>父进程调用wait或者waitpid等待子进程结束（需要每隔一段时间查询子进程是否结束）。wait系统调用会使父进程暂停执行，直到它的一个子进程结束为止。waitpid则可以加入 <code>WNOHANG</code>(wait-no-hang)选项，如果没有发现结束的子进程，就会立即返回，不会将调用waitpid的进程阻塞。同时，waitpid还可以选择是等待任一子进程（同wait），还是等待指定pid的子进程，还是等待同一进程组下的任一子进程，还是等待组ID等于pid的任一子进程；</li><li>子进程结束时，系统会产生 <code>SIGCHLD</code>(signal-child)信号，可以注册一个信号处理函数，在该函数中调用waitpid，等待所有结束的子进程（注意：一般都需要循环调用waitpid，因为在信号处理函数开始执行之前，可能已经有多个子进程结束了，而信号处理函数只执行一次，所以要循环调用将所有结束的子进程回收）；</li><li>也可以用 <code>signal(SIGCLD, SIG_IGN)</code>(signal-ignore)通知内核，表示忽略 <code>SIGCHLD</code>信号，那么子进程结束后，内核会进行回收。</li></ul><h4 id="孤儿进程" tabindex="-1"><a class="header-anchor" href="#孤儿进程" aria-hidden="true">#</a> 孤儿进程</h4><blockquote><p>百度百科：在操作系统领域中，孤儿进程指的<strong>是在其父进程执行完成或被终止后仍继续运行的一类进程</strong>。这些孤儿进程将被init进程 (进程号为1)所收养，并由init进程对它们完成状态收集工作。</p></blockquote><p>一个父进程已经结束了，但是它的子进程还在运行，那么这些子进程将成为孤儿进程。孤儿进程会被Init（进程ID为1）接管，当这些孤儿进程结束时由Init完成状态收集工作。</p><h3 id="💫i-o-多路复用-select-poll-epoll" tabindex="-1"><a class="header-anchor" href="#💫i-o-多路复用-select-poll-epoll" aria-hidden="true">#</a> 💫I/O 多路复用：select/poll/epoll</h3><h4 id="最基本的-socket-模型" tabindex="-1"><a class="header-anchor" href="#最基本的-socket-模型" aria-hidden="true">#</a> 最基本的 Socket 模型</h4><p>要想客户端和服务器能在网络中通信，那必须得使用 Socket 编程，它是进程间通信里比较特别的方式，特别之处在于它是可以跨主机间通信。</p><p>Socket 的中文名叫作插口，咋一看还挺迷惑的。事实上，双方要进行网络通信前，各自得创建一个 Socket，这相当于客户端和服务器都开了一个“口子”，双方读取和发送数据的时候，都通过这个“口子”。这样一看，是不是觉得很像弄了一根网线，一头插在客户端，一头插在服务端，然后进行通信。</p><p>创建 Socket 的时候，可以指定网络层使用的是 IPv4 还是 IPv6，传输层使用的是 TCP 还是 UDP。</p><p>UDP 的 Socket 编程相对简单些，这里我们只介绍基于 TCP 的 Socket 编程。</p><p>服务器的程序要先跑起来，然后等待客户端的连接和数据，我们先来看看服务端的 Socket 编程过程是怎样的。</p><p>服务端首先调用 <code>socket()</code> 函数，创建网络协议为 IPv4，以及传输协议为 TCP 的 Socket ，接着调用 <code>bind()</code> 函数，给这个 Socket 绑定一个 <strong>IP 地址和端口</strong>，绑定这两个的目的是什么？</p><ul><li>绑定端口的目的：当内核收到 TCP 报文，通过 TCP 头里面的端口号，来找到我们的应用程序，然后把数据传递给我们。</li><li>绑定 IP 地址的目的：一台机器是可以有多个网卡的，每个网卡都有对应的 IP 地址，当绑定一个网卡时，内核在收到该网卡上的包，才会发给我们；</li></ul><p>绑定完 IP 地址和端口后，就可以调用 <code>listen()</code> 函数进行监听，此时对应 TCP 状态图中的 <code>listen</code>，如果我们要判定服务器中一个网络程序有没有启动，可以通过 <code>netstat</code> 命令查看对应的端口号是否有被监听。</p><p>服务端进入了监听状态后，通过调用 <code>accept()</code> 函数，来从内核获取客户端的连接，如果没有客户端连接，则会阻塞等待客户端连接的到来。</p><p>那客户端是怎么发起连接的呢？客户端在创建好 Socket 后，调用 <code>connect()</code> 函数发起连接，该函数的参数要指明服务端的 IP 地址和端口号，然后万众期待的 TCP 三次握手就开始了。</p><p>在 TCP 连接的过程中，服务器的内核实际上为每个 Socket 维护了两个队列：</p><ul><li>一个是还没完全建立连接的队列，称为 <strong>TCP 半连接队列</strong>，这个队列都是没有完成三次握手的连接，此时服务端处于 <code>syn_rcvd</code> 的状态；</li><li>一个是一件建立连接的队列，称为 <strong>TCP 全连接队列</strong>，这个队列都是完成了三次握手的连接，此时服务端处于 <code>established</code> 状态；</li></ul><p>当 TCP 全连接队列不为空后，服务端的 <code>accept()</code> 函数，就会从内核中的 TCP 全连接队列里拿出一个已经完成连接的 Socket 返回应用程序，后续数据传输都用这个 Socket。</p><p>注意，监听的 Socket 和真正用来传数据的 Socket 是两个：</p><ul><li>一个叫作<strong>监听 Socket</strong>；</li><li>一个叫作<strong>已连接 Socket</strong>；</li></ul><p>连接建立后，客户端和服务端就开始相互传输数据了，双方都可以通过 <code>read()</code> 和 <code>write()</code> 函数来读写数据。</p><p>至此， TCP 协议的 Socket 程序的调用过程就结束了，整个过程如下图：</p><figure><img src="`+m+'" alt="image-20220731143809167" tabindex="0" loading="lazy"><figcaption>image-20220731143809167</figcaption></figure><p>看到这，不知道你有没有觉得读写 Socket 的方式，好像读写文件一样。</p><p>是的，基于 Linux 一切皆文件的理念，在内核中 Socket 也是以「文件」的形式存在的，也是有对应的文件描述符。</p><blockquote><p>PS : 下面会说到内核里的数据结构，不感兴趣的可以跳过这一部分，不会对后续的内容有影响。</p></blockquote><p>文件描述符的作用是什么？每一个进程都有一个数据结构 <code>task_struct</code>，该结构体里有一个指向「文件描述符数组」的成员指针。该数组里列出这个进程打开的所有文件的文件描述符。数组的下标是文件描述符，是一个整数，而数组的内容是一个指针，指向内核中所有打开的文件的列表，也就是说内核可以通过文件描述符找到对应打开的文件。</p><p>然后每个文件都有一个 inode，Socket 文件的 inode 指向了内核中的 Socket 结构，在这个结构体里有两个队列，分别是<strong>发送队列</strong>和<strong>接收队列</strong>，这个两个队列里面保存的是一个个 <code>struct sk_buff</code>，用链表的组织形式串起来。</p><p>sk_buff 可以表示各个层的数据包，在应用层数据包叫 data，在 TCP 层我们称为 segment，在 IP 层我们叫 packet，在数据链路层称为 frame。</p><p>你可能会好奇，为什么全部数据包只用一个结构体来描述呢？协议栈采用的是分层结构，上层向下层传递数据时需要增加包头，下层向上层数据时又需要去掉包头，如果每一层都用一个结构体，那在层之间传递数据的时候，就要发生多次拷贝，这将大大降低 CPU 效率。</p><p>于是，为了在层级之间传递数据时，不发生拷贝，只用 sk_buff 一个结构体来描述所有的网络包，那它是如何做到的呢？是通过调整 sk_buff 中 <code>data</code> 的指针，比如：</p><ul><li>当接收报文时，从网卡驱动开始，通过协议栈层层往上传送数据报，通过增加 skb-&gt;data 的值，来逐步剥离协议首部。</li><li>当要发送报文时，创建 sk_buff 结构体，数据缓存区的头部预留足够的空间，用来填充各层首部，在经过各下层协议时，通过减少 skb-&gt;data 的值来增加协议首部。</li></ul><p>你可以从下面这张图看到，当发送报文时，data 指针的移动过程。</p><figure><img src="'+f+'" alt="image-20220717161851452" tabindex="0" loading="lazy"><figcaption>image-20220717161851452</figcaption></figure><h4 id="如何服务更多的用户" tabindex="-1"><a class="header-anchor" href="#如何服务更多的用户" aria-hidden="true">#</a> 如何服务更多的用户？</h4><p>前面提到的 TCP Socket 调用流程是最简单、最基本的，它基本只能一对一通信，因为使用的是同步阻塞的方式，当服务端在还没处理完一个客户端的网络 I/O 时，或者 读写操作发生阻塞时，其他客户端是无法与服务端连接的。</p><p>可如果我们服务器只能服务一个客户，那这样就太浪费资源了，于是我们要改进这个网络 I/O 模型，以支持更多的客户端。</p><p>在改进网络 I/O 模型前，我先来提一个问题，你知道服务器单机理论最大能连接多少个客户端？</p><p>相信你知道 TCP 连接是由四元组唯一确认的，这个四元组就是：<strong>本机IP, 本机端口, 对端IP, 对端端口</strong>。</p><p>服务器作为服务方，通常会在本地固定监听一个端口，等待客户端的连接。因此服务器的本地 IP 和端口是固定的，于是对于服务端 TCP 连接的四元组只有对端 IP 和端口是会变化的，所以<strong>最大 TCP 连接数 = 客户端 IP 数×客户端端口数</strong>。</p><p>对于 IPv4，客户端的 IP 数最多为 2 的 32 次方，客户端的端口数最多为 2 的 16 次方，也就是<strong>服务端单机最大 TCP 连接数约为 2 的 48 次方</strong>。</p><p>这个理论值相当“丰满”，但是服务器肯定承载不了那么大的连接数，主要会受两个方面的限制：</p><ul><li><strong>文件描述符</strong>，Socket 实际上是一个文件，也就会对应一个文件描述符。在 Linux 下，单个进程打开的文件描述符数是有限制的，没有经过修改的值一般都是 1024，不过我们可以通过 ulimit 增大文件描述符的数目；</li><li><strong>系统内存</strong>，每个 TCP 连接在内核中都有对应的数据结构，意味着每个连接都是会占用一定内存的；</li></ul><p>那如果服务器的内存只有 2 GB，网卡是千兆的，能支持并发 1 万请求吗？</p><p>并发 1 万请求，也就是经典的 C10K 问题 ，C 是 Client 单词首字母缩写，C10K 就是单机同时处理 1 万个请求的问题。</p><p>从硬件资源角度看，对于 2GB 内存千兆网卡的服务器，如果每个请求处理占用不到 200KB 的内存和 100Kbit 的网络带宽就可以满足并发 1 万个请求。</p><p>不过，要想真正实现 C10K 的服务器，要考虑的地方在于服务器的网络 I/O 模型，效率低的模型，会加重系统开销，从而会离 C10K 的目标越来越远。</p><h4 id="多进程模型" tabindex="-1"><a class="header-anchor" href="#多进程模型" aria-hidden="true">#</a> 多进程模型</h4><p>基于最原始的阻塞网络 I/O， 如果服务器要支持多个客户端，其中比较传统的方式，就是使用<strong>多进程模型</strong>，也就是为每个客户端分配一个进程来处理请求。</p><p>服务器的主进程负责监听客户的连接，一旦与客户端连接完成，accept() 函数就会返回一个「已连接 Socket」，这时就通过 <code>fork()</code> 函数创建一个子进程，实际上就把父进程所有相关的东西都<strong>复制</strong>一份，包括文件描述符、内存地址空间、程序计数器、执行的代码等。</p><p>这两个进程刚复制完的时候，几乎一摸一样。不过，会根据<strong>返回值</strong>来区分是父进程还是子进程，如果返回值是 0，则是子进程；如果返回值是其他的整数，就是父进程。</p><p>正因为子进程会<strong>复制父进程的文件描述符</strong>，于是就可以直接使用「已连接 Socket 」和客户端通信了，</p><p>可以发现，子进程不需要关心「监听 Socket」，只需要关心「已连接 Socket」；父进程则相反，将客户服务交给子进程来处理，因此父进程不需要关心「已连接 Socket」，只需要关心「监听 Socket」。</p><p>下面这张图描述了从连接请求到连接建立，父进程创建生子进程为客户服务。</p><figure><img src="'+b+'" alt="image-20220717163910297" tabindex="0" loading="lazy"><figcaption>image-20220717163910297</figcaption></figure><p>另外，当「子进程」退出时，实际上内核里还会保留该进程的一些信息，也是会占用内存的，如果不做好“回收”工作，就会变成<strong>僵尸进程</strong>，随着僵尸进程越多，会慢慢耗尽我们的系统资源。</p><blockquote><p>一个子进程的进程描述符在子进程退出时不会释放，只有当父进程通过 wait() 或 waitpid() 获取了子进程信息后才会释放。如果子进程退出，而父进程并没有调用 wait() 或 waitpid()，那么子进程的进程描述符仍然保存在系统中，这种进程称之为僵尸进程。</p></blockquote><p>因此，父进程要“善后”好自己的孩子，怎么善后呢？那么有两种方式可以在子进程退出后回收资源，分别是调用 <code>wait()</code> 和 <code>waitpid()</code> 函数。</p><p>这种用多个进程来应付多个客户端的方式，在应对 100 个客户端还是可行的，但是当客户端数量高达一万时，肯定扛不住的，因为每产生一个进程，必会占据一定的系统资源，而且进程间上下文切换的“包袱”是很重的，性能会大打折扣。</p><p>进程的上下文切换不仅包含了虚拟内存、栈、全局变量等用户空间的资源，还包括了内核堆栈、寄存器等内核空间的资源。</p><h4 id="多线程模型" tabindex="-1"><a class="header-anchor" href="#多线程模型" aria-hidden="true">#</a> 多线程模型</h4><p>既然进程间上下文切换的“包袱”很重，那我们就搞个比较轻量级的模型来应对多用户的请求 —— <strong>多线程模型</strong>。</p><p>线程是运行在进程中的一个“逻辑流”，单进程中可以运行多个线程，同进程里的线程可以共享进程的部分资源的，比如文件描述符列表、进程空间、代码、全局数据、堆、共享库等，这些共享些资源在上下文切换时是不需要切换，而只需要切换线程的私有数据、寄存器等不共享的数据，因此同一个进程下的线程上下文切换的开销要比进程小得多。</p><p>当服务器与客户端 TCP 完成连接后，通过 <code>pthread_create()</code> 函数创建线程，然后将「已连接 Socket」的文件描述符传递给线程函数，接着在线程里和客户端进行通信，从而达到并发处理的目的。</p><p>如果每来一个连接就创建一个线程，线程运行完后，还得操作系统还得销毁线程，虽说线程切换的上写文开销不大，但是如果频繁创建和销毁线程，系统开销也是不小的。</p><p>那么，我们可以使用<strong>线程池</strong>的方式来避免线程的频繁创建和销毁，所谓的线程池，就是提前创建若干个线程，这样当由新连接建立时，将这个已连接的 Socket 放入到一个队列里，然后线程池里的线程负责从队列中取出已连接 Socket 进程处理。</p><figure><img src="'+C+'" alt="image-20220717163933495" tabindex="0" loading="lazy"><figcaption>image-20220717163933495</figcaption></figure><p>需要注意的是，这个队列是全局的，每个线程都会操作，为了避免多线程竞争，线程在操作这个队列前要加锁。</p><p>上面基于进程或者线程模型的，其实还是有问题的。新到来一个 TCP 连接，就需要分配一个进程或者线程，那么如果要达到 C10K，意味着要一台机器维护 1 万个连接，相当于要维护 1 万个进程/线程，操作系统就算死扛也是扛不住的。</p><h4 id="i-o-多路复用" tabindex="-1"><a class="header-anchor" href="#i-o-多路复用" aria-hidden="true">#</a> I/O 多路复用</h4><p>既然为每个请求分配一个进程/线程的方式不合适，那有没有可能只使用一个进程来维护多个 Socket 呢？答案是有的，那就是 <strong>I/O 多路复用</strong>技术。</p><figure><img src="'+v+`" alt="image-20220717165055763" tabindex="0" loading="lazy"><figcaption>image-20220717165055763</figcaption></figure><p>一个进程虽然任一时刻只能处理一个请求，但是处理每个请求的事件时，耗时控制在 1 毫秒以内，这样 1 秒内就可以处理上千个请求，把时间拉长来看，多个请求复用了一个进程，这就是多路复用，这种思想很类似一个 CPU 并发多个进程，所以也叫做时分多路复用。</p><p>我们熟悉的 select/poll/epoll 内核提供给用户态的多路复用系统调用，<strong>进程可以通过一个系统调用函数从内核中获取多个事件</strong>。</p><p>select/poll/epoll 是如何获取网络事件的呢？在获取事件时，先把所有连接（文件描述符）传给内核，再由内核返回产生了事件的连接，然后在用户态中再处理这些连接对应的请求即可。</p><p>select/poll/epoll 这是三个多路复用接口，都能实现 C10K 吗？接下来，我们分别说说它们。</p><h4 id="select-poll" tabindex="-1"><a class="header-anchor" href="#select-poll" aria-hidden="true">#</a> select/poll</h4><p>select 实现多路复用的方式是，将已连接的 Socket 都放到一个<strong>文件描述符集合</strong>，然后调用 select 函数将文件描述符集合<strong>拷贝</strong>到内核里，让内核来检查是否有网络事件产生，检查的方式很粗暴，就是通过<strong>遍历</strong>文件描述符集合的方式，当检查到有事件产生后，将此 Socket 标记为可读或可写， 接着再把整个文件描述符集合<strong>拷贝</strong>回用户态里，然后用户态还需要再通过<strong>遍历</strong>的方法找到可读或可写的 Socket，然后再对其处理。</p><p>所以，对于 select 这种方式，需要进行 <strong>2 次「遍历」文件描述符集合</strong>，一次是在内核态里，一个次是在用户态里 ，而且还会发生 <strong>2 次「拷贝」文件描述符集合</strong>，先从用户空间传入内核空间，由内核修改后，再传出到用户空间中。</p><p>select 使用固定长度的 BitsMap，表示文件描述符集合，而且所支持的文件描述符的个数是有限制的，在 Linux 系统中，由内核中的 FD_SETSIZE 限制， 默认最大值为 <code>1024</code>，只能监听 0~1023 的文件描述符。</p><p>poll 不再用 BitsMap 来存储所关注的文件描述符，取而代之用动态数组，以链表形式来组织，突破了 select 的文件描述符个数限制，当然还会受到系统文件描述符限制。</p><p>但是 poll 和 select 并没有太大的本质区别，<strong>都是使用「线性结构」存储进程关注的 Socket 集合，因此都需要遍历文件描述符集合来找到可读或可写的 Socket，时间复杂度为 O(n)，而且也需要在用户态与内核态之间拷贝文件描述符集合</strong>，这种方式随着并发数上来，性能的损耗会呈指数级增长。</p><h4 id="epoll" tabindex="-1"><a class="header-anchor" href="#epoll" aria-hidden="true">#</a> epoll</h4><p>先复习下 epoll 的用法。如下的代码中，先用epoll_create 创建一个 epoll对象 epfd，再通过 epoll_ctl 将需要监视的 socket 添加到epfd中，最后调用 epoll_wait 等待数据。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> s <span class="token operator">=</span> <span class="token function">socket</span><span class="token punctuation">(</span>AF_INET<span class="token punctuation">,</span> SOCK_STREAM<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">bind</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">listen</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>

<span class="token keyword">int</span> epfd <span class="token operator">=</span> <span class="token function">epoll_create</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">epoll_ctl</span><span class="token punctuation">(</span>epfd<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//将所有需要监听的socket添加到epfd中</span>

<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token function">epoll_wait</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>接收到数据的socket<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//处理</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>epoll 通过两个方面，很好解决了 select/poll 的问题。</p><p><em>第一点</em>，epoll 在内核里使用<strong>红黑树来跟踪进程所有待检测的文件描述字</strong>，把需要监控的 socket 通过 <code>epoll_ctl()</code> 函数加入内核中的红黑树里，红黑树是个高效的数据结构，增删改一般时间复杂度是 <code>O(logn)</code>。而 select/poll 内核里没有类似 epoll 红黑树这种保存所有待检测的 socket 的数据结构，所以 select/poll 每次操作时都传入整个 socket 集合给内核，而 epoll 因为在内核维护了红黑树，可以保存所有待检测的 socket ，所以只需要传入一个待检测的 socket，减少了内核和用户空间大量的数据拷贝和内存分配。</p><p><em>第二点</em>， epoll 使用<strong>事件驱动</strong>的机制，内核里<strong>维护了一个链表来记录就绪事件</strong>，当某个 socket 有事件发生时，通过<strong>回调函数</strong>内核会将其加入到这个就绪事件列表中，当用户调用 <code>epoll_wait()</code> 函数时，只会返回有事件发生的文件描述符的个数，不需要像 select/poll 那样轮询扫描整个 socket 集合，大大提高了检测的效率。</p><p>从下图你可以看到 epoll 相关的接口作用：</p><figure><img src="`+P+'" alt="image-20220717165140152" tabindex="0" loading="lazy"><figcaption>image-20220717165140152</figcaption></figure><p>epoll 的方式即使监听的 Socket 数量越多的时候，效率不会大幅度降低，能够同时监听的 Socket 的数目也非常的多了，上限就为系统定义的进程打开的最大文件描述符个数。因而，<strong>epoll 被称为解决 C10K 问题的利器</strong>。</p><p>插个题外话，网上文章不少说，<code>epoll_wait</code> 返回时，对于就绪的事件，epoll 使用的是共享内存的方式，即用户态和内核态都指向了就绪链表，所以就避免了内存拷贝消耗。</p><p>这是错的！看过 epoll 内核源码的都知道，<strong>压根就没有使用共享内存这个玩意</strong>。你可以从下面这份代码看到， epoll_wait 实现的内核代码中调用了 <code>__put_user</code> 函数，这个函数就是将数据从内核拷贝到用户空间。</p><figure><img src="'+S+'" alt="image-20220717165148621" tabindex="0" loading="lazy"><figcaption>image-20220717165148621</figcaption></figure><h5 id="边缘触发和水平触发" tabindex="-1"><a class="header-anchor" href="#边缘触发和水平触发" aria-hidden="true">#</a> 边缘触发和水平触发</h5><p>这两个术语还挺抽象的，其实它们的区别还是很好理解的。</p><ul><li>使用边缘触发模式时，当被监控的 Socket 描述符上有可读事件发生时，<strong>服务器端只会从 epoll_wait 中苏醒一次</strong>，即使进程没有调用 read 函数从内核读取数据，也依然只苏醒一次，因此我们程序要保证一次性将内核缓冲区的数据读取完；</li><li>使用水平触发模式时，当被监控的 Socket 上有可读事件发生时，<strong>服务器端不断地从 epoll_wait 中苏醒，直到内核缓冲区数据被 read 函数读完才结束</strong>，目的是告诉我们有数据需要读取；</li></ul><p>举个例子，你的快递被放到了一个快递箱里，如果快递箱只会通过短信通知你一次，即使你一直没有去取，它也不会再发送第二条短信提醒你，这个方式就是边缘触发；如果快递箱发现你的快递没有被取出，它就会不停地发短信通知你，直到你取出了快递，它才消停，这个就是水平触发的方式。</p><p>这就是两者的区别，水平触发的意思是只要满足事件的条件，比如内核中有数据需要读，就一直不断地把这个事件传递给用户；而边缘触发的意思是只有第一次满足条件的时候才触发，之后就不会再传递同样的事件了。</p><p>如果使用水平触发模式，当内核通知文件描述符可读写时，接下来还可以继续去检测它的状态，看它是否依然可读或可写。所以在收到通知后，没必要一次执行尽可能多的读写操作。</p><p>如果使用边缘触发模式，I/O 事件发生时只会通知一次，而且我们不知道到底能读写多少数据，所以在收到通知后应尽可能地读写数据，以免错失读写的机会。因此，我们会<strong>循环</strong>从文件描述符读写数据，那么如果文件描述符是阻塞的，没有数据可读写时，进程会阻塞在读写函数那里，程序就没办法继续往下执行。所以，<strong>边缘触发模式一般和非阻塞 I/O 搭配使用</strong>，程序会一直执行 I/O 操作，直到系统调用（如 <code>read</code> 和 <code>write</code>）返回错误，错误类型为 <code>EAGAIN</code> 或 <code>EWOULDBLOCK</code>。</p><p>一般来说，边缘触发的效率比水平触发的效率要高，因为边缘触发可以减少 epoll_wait 的系统调用次数，系统调用也是有一定的开销的的，毕竟也存在上下文的切换。</p><p>select/poll 只有水平触发模式，epoll 默认的触发模式是水平触发，但是可以根据应用场景设置为边缘触发模式。</p><p>另外，使用 I/O 多路复用时，最好搭配非阻塞 I/O 一起使用，Linux 手册关于 select 的内容中有如下说明：</p><blockquote><p>Under Linux, select() may report a socket file descriptor as &quot;ready for reading&quot;, while nevertheless a subsequent read blocks. This could for example happen when data has arrived but upon examination has wrong checksum and is discarded. There may be other circumstances in which a file descriptor is spuriously reported as ready. Thus it may be safer to use O_NONBLOCK on sockets that should not block.</p></blockquote><p>我谷歌翻译的结果：</p><blockquote><p>在Linux下，select() 可能会将一个 socket 文件描述符报告为 &quot;准备读取&quot;，而后续的读取块却没有。例如，当数据已经到达，但经检查后发现有错误的校验和而被丢弃时，就会发生这种情况。也有可能在其他情况下，文件描述符被错误地报告为就绪。因此，在不应该阻塞的 socket 上使用 O_NONBLOCK 可能更安全。</p></blockquote><p>简单点理解，就是<strong>多路复用 API 返回的事件并不一定可读写的</strong>，如果使用阻塞 I/O， 那么在调用 read/write 时则会发生程序阻塞，因此最好搭配非阻塞 I/O，以便应对极少数的特殊情况。</p><h4 id="总结-1" tabindex="-1"><a class="header-anchor" href="#总结-1" aria-hidden="true">#</a> 总结</h4><p>最基础的 TCP 的 Socket 编程，它是阻塞 I/O 模型，基本上只能一对一通信，那为了服务更多的客户端，我们需要改进网络 I/O 模型。</p><p>比较传统的方式是使用多进程/线程模型，每来一个客户端连接，就分配一个进程/线程，然后后续的读写都在对应的进程/线程，这种方式处理 100 个客户端没问题，但是当客户端增大到 10000 个时，10000 个进程/线程的调度、上下文切换以及它们占用的内存，都会成为瓶颈。</p><p>为了解决上面这个问题，就出现了 I/O 的多路复用，可以只在一个进程里处理多个文件的 I/O，Linux 下有三种提供 I/O 多路复用的 API，分别是： select、poll、epoll。</p><p>select 和 poll 并没有本质区别，它们内部都是使用「线性结构」来存储进程关注的 Socket 集合。</p><p>在使用的时候，首先需要把关注的 Socket 集合通过 select/poll 系统调用从用户态拷贝到内核态，然后由内核检测事件，当有网络事件产生时，内核需要遍历进程关注 Socket 集合，找到对应的 Socket，并设置其状态为可读/可写，然后把整个 Socket 集合从内核态拷贝到用户态，用户态还要继续遍历整个 Socket 集合找到可读/可写的 Socket，然后对其处理。</p><p>很明显发现，select 和 poll 的缺陷在于，当客户端越多，也就是 Socket 集合越大，Socket 集合的遍历和拷贝会带来很大的开销，因此也很难应对 C10K。</p><p>epoll 是解决 C10K 问题的利器，通过两个方面解决了 select/poll 的问题。</p><ul><li>epoll 在内核里使用「红黑树」来关注进程所有待检测的 Socket，红黑树是个高效的数据结构，增删改一般时间复杂度是 O(logn)，通过对这棵黑红树的管理，不需要像 select/poll 在每次操作时都传入整个 Socket 集合，减少了内核和用户空间大量的数据拷贝和内存分配。</li><li>epoll 使用事件驱动的机制，内核里维护了一个「链表」来记录就绪事件，只将有事件发生的 Socket 集合传递给应用程序，不需要像 select/poll 那样轮询扫描整个集合（包含有和无事件的 Socket ），大大提高了检测的效率。</li></ul><p>而且，epoll 支持边缘触发和水平触发的方式，而 select/poll 只支持水平触发，一般而言，边缘触发的方式会比水平触发的效率高。</p>',210);function O(y,D){const a=c("ExternalLinkIcon");return o(),p("div",null,[I,n("blockquote",null,[n("p",null,[e("下面这部分总结参考了:"),n("a",x,[e("《进程间通信 IPC (InterProcess Communication)》"),i(a)]),e("这篇文章，推荐阅读，总结的非常不错。")])]),w])}const M=t(_,[["render",O],["__file","system.html.vue"]]);export{M as default};
