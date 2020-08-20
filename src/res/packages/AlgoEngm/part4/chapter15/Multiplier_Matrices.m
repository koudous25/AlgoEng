function  [C] = Multiplier_Matrices(A,B)
cA=size(A,2);
lB=size(B,1);
if cA ~= lB
    disp('Erreur , Dimentions incompatibles');
else
    for i=1:size(A,1)
        for j=1:size(B,2)
            C(i,j)=0;
            for k=1:size(A,2)
                C(i,j)= C(i,j) + A(i,k)*B(k,j); 
            end
        end
        
    end
end

end

