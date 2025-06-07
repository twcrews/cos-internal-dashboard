#!/bin/bash
YELLOW=$(tput setaf 3)
NORMAL=$(tput sgr0)

# This removes a weird hosts entry that overrides the [127.0.0.1 -> localhost] mapping, fixing an 'ECONNREFUSED' error
# when running `ng serve`. Seems to be a Docker-specific bug.
#
# Docker doesn't allow modifying the hosts file directly, so we have to do this crazy `cp` dance instead.
cp /etc/hosts /etc/hosts2 && \
  sed -i 's/::1.*/::1 ip6-localhost ip6-loopback/' /etc/hosts2 && \
	cp -f /etc/hosts2 /etc/hosts && \
	rm -f /etc/hosts2 || \
	printf "\n${YELLOW}Failed to configure hosts file!\nWhen running \`ng serve\`, you may need to add \`--host=127.0.0.1\` if you have problems.${NORMAL}\n"
	