FROM centos:6.6

# yum updates
RUN rpm --rebuilddb && yum -y update &&  yum -y clean all

# timezone and locale
RUN rpm --rebuilddb && yum -y reinstall glibc-common &&  yum -y clean all
RUN localedef -v -c -i ja_JP -f UTF-8 ja_JP.UTF-8; echo "";
ENV LANG=ja_JP.UTF-8
RUN rm -f /etc/localtime
RUN ln -fs /usr/share/zoneinfo/Asia/Tokyo /etc/localtime

# basic utilities
RUN rpm --rebuilddb && yum -y install nodejs git npm zip unzip wget telnet postfix mail sudo && \
    yum -y clean all

RUN npm install --global yarn

RUN git pull
