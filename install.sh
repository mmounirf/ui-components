#!/bin/bash

# Color
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NC='\033[0m'

# echo "This repo depends on Bit Harmony https://harmony-docs.bit.dev/getting-started/installing-bit, do you want to install it now ? "
# select yn in "Yes" "No"; do
#     case $yn in
#         Yes ) yarn global add @teambit/bvm; bvm install; break;;
#         No ) exit;;
#     esac
# done


# read -p "This repo depends on Bit Harmony https://harmony-docs.bit.dev/getting-started/installing-bit, do you want to install it now ? "
# confirm && [[ $confirm == [yY] || $confirm == [yY][eE][sS] ]] || exit 1


# echo "This repo depends on Bit Harmony https://harmony-docs.bit.dev/getting-started/installing-bit"
# echo "do you want to install it now ? (y/n)"
# read answer

# if [ "$answer" != "${answer#[Yy]}" ] ;then
#     npm i -g @teambit/bvm
#     bvm install
# else
#     echo "This repo depends on Bit Harmony https://harmony-docs.bit.dev/getting-started/installing-bit"
#     echo "and it should be installed first before serving the ui-components library"
# fi

echo -e "This repo depends on Bit Harmony https://harmony-docs.bit.dev/getting-started/installing-bit. \n Do you want to install it now ? [Y/n] "
read -r input
 
case $input in
    [yY][eE][sS]|[yY])
        npm i -g @teambit/bvm
        bvm install
    ;;
    [nN][oO]|[nN])
        echo "${YELLOW}This repo depends on Bit Harmony https://harmony-docs.bit.dev/getting-started/installing-bit"
        echo "and it should be installed first before serving the ui-components library${NC}"
    ;;
    *)
 echo "${RED}Invalid input${NC}"
 exit;;
esac
