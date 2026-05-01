# .devcontainer/Dockerfile
FROM registry.access.redhat.com/ubi9/ubi-minimal

RUN microdnf upgrade -y --disablerepo=* --enablerepo=ubi-9-appstream-rpms --enablerepo=ubi-9-baseos-rpms

RUN microdnf install -y --disablerepo=* --enablerepo=ubi-9-appstream-rpms --enablerepo=ubi-9-baseos-rpms tar gzip git zsh gpg git-lfs 

# install pnpm
RUN curl -fsSL https://get.pnpm.io/install.sh | sh -

# set up environment variables for pnpm
ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# use pnpm to set LTS environment
RUN pnpm env use --global lts

ENTRYPOINT [ "/bin/zsh" ]